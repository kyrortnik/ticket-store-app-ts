import { HallDTO } from './hallDTO';
import { MovieDTO } from './movieDTO';

export class TicketDTO {
  id: number;
  code: string;
  sessionDateTime: string;
  hall: HallDTO;
  movie: MovieDTO;
}
