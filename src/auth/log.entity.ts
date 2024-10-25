import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';

export class Log {
  @ApiProperty({ example: 1, description: 'Log ID' })
  id: number;

  @ApiProperty({ example: 1, description: 'User ID' })
  userId: number;

  @ApiProperty({
    example: 'POST',
    description: 'Metodo que s realizó',
  })
  action: number;

  @ApiProperty({
    example: 'Se actualizó un recurso en /user',
    description: 'Insertar al enpoint que hizo la consulta',
  })
  description: number;

  @ApiProperty({
    example: '2023-10-01T00:00:00Z',
    description: 'Creation date',
  })
  createdAt: Date;

  @ApiProperty({
    type: () => User,
    description: 'Usuario que realizó la operación',
    required: false,
  })
  users?: User;
}
