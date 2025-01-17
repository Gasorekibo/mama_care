import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    const dataSource = app.get(DataSource);
    if (dataSource.isInitialized) {
      console.log('✅ Database connection is established');
    }
    app.listen(3000, () => {
      console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`)
    });

  } catch (error) {
    
  }
  
}
bootstrap();
