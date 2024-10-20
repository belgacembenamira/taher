import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffre } from './Coffre.entity';
import { CoffresService } from './Coffre.service';
import { CoffresController } from './Coffre.controller';
import { Personnel } from 'src/Personnel/PersonneEntity.entity';
import { Client } from 'src/Client/Client.entity';
import { Commande } from 'src/Commande/Commande.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffre, Commande, Personnel, Client])],
  providers: [CoffresService],
  controllers: [CoffresController],
})
export class CoffreModule {}