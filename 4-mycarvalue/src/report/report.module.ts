import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportController } from './report.controller';
import { Report } from './report.entity';
import { ReportService } from './report.service';

@Module({
  controllers: [ReportController],
  providers: [ReportService],
  imports: [TypeOrmModule.forFeature([Report])]
})
export class ReportModule {}
