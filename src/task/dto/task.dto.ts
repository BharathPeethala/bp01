import { IsDefined, IsString, IsUUID } from 'class-validator';

export class TaskDto {
  @IsDefined()
  @IsString()
  name: string;
}

export class uuidDto {
  @IsDefined()
  @IsUUID()
  id: string;
}
