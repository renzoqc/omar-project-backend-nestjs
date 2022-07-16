import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `categori ${id} and product ${productId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear por categories',
      payload,
    };
  }
}
