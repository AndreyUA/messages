import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return;
  }

  @Post()
  createMessage(@Body() body: any) {
    Logger.log(body);

    return;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    Logger.log(id);

    return;
  }
}
