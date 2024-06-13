import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@/modules/auth/auth.module';
import { BusDriverModule } from '@/modules/bus-drivers/bus-driver.module';
import { BusConductorModule } from '@/modules/bus-conductors/bus-conductor.module';
import { BusModule } from '@/modules/bus/bus.module';

const configService: ConfigService = new ConfigService();

const configModuleOpts = {
  envFilePath: '.env',
  isGlobal: true,
};

const mailerModuleOpts = {
  transport: {
    host: configService.get<string>('APP_MAIL_HOST'),
    port: configService.get<number>('APP_MAIL_PORT'),
    auth: {
      user: configService.get<string>('APP_MAIL_USER'),
      pass: configService.get<string>('APP_MAIL_PASSWORD'),
    },
  },
};

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOpts),
    MailerModule.forRoot(mailerModuleOpts),
    AuthModule,
    BusDriverModule,
    BusConductorModule,
    BusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
