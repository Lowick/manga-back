import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    ConfigModule.forRoot({envFilePath:[`.env`]}),
   TypeOrmModule.forFeature([Utilisateur]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  signOptions: { expiresIn: '2h' },
      secret: process.env.ACCESS_TOKEN_SECRET,
  }),
],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
