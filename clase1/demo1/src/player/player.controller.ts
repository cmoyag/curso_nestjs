import { Body, Controller,Get,Post,Param, ParseIntPipe} from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from './player.entity';
//Esto significa que el controlador va a respunder peticion dentro de la ruta player
@Controller('player')
export class PlayerController {
 /*Al declarar la variable privada en el constructor
 se evita crar las variables en la clase ejemplo:

    playerservice : PlayerService;
    constructor(playerservice: PlayerService ){
        this.playerservice = PlayerService;
    }
 */  
    constructor(private readonly playerservice: PlayerService ){}

    @Get()
    getAll() {
        return this.playerservice.getPlayer();
    }

    @Get(':id')
    getPlayerId(@Param('id',ParseIntPipe) id):Player{
        return this.playerservice.getPlayerId(id);
    }

    @Post()
    createPlayer(@Body() player):Player{
     //return `Crea un jugador: ${body.name} Juega de ${body.position}`;
      return this.playerservice.createPlayer(player);
    }

}