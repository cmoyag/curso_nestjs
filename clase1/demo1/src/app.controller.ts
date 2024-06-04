import { Controller, Get,Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
// 4 Decoradores o Anotaciones 
//  Programacion de meta data que simplifica el desarrollo y las validaciones 
  @Get('/dos')
  getDos(): string{
    return "Hola Ruta 2!!!";
  }

  @Get('/productos/:id')
  getProducto(@Param() params): string{
    return `El Producto es..${params.id}`;
  }

  @Get('/buscar/:query/:page')
  getBuscarPage(@Param() params): string{
    return `Buscar: ${params.query} - Pagina : ${params.page}`;
  }
  //Variables Unitarias : Solo retorna el valor de la variable query
  @Get('/buscar/:query/:page/:limit')
  getBuscarPageLimit(@Param('query') query,
                     @Param('page') page,
                     @Param('limit') limit) : string{
    return `Buscar: ${query} - Pagina : ${page} - Limit:${limit}`;
  }
 //Fin modulo 4
 
 //5 Como crear un propio artefacto
 
}
