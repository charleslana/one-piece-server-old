import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class UpdateAvatarDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  id: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(9999)
  image: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  characterId: number;
}
