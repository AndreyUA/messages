import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    Logger.log(body);

    return;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    Logger.log(id);

    return;
  }
}
