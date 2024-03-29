import { ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';

describe('App e2e', () => {
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule], }).compile();
    const app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({whitelist: true,}));
    await app.init();
  });

  afterAll(async () => {
    app.close();
  });
  
  it.todo('should display welcome message');
});