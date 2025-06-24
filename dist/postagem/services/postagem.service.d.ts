import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
export declare class PostagemService {
    private postagemRepository;
    constructor(postagemRepository: Repository<Postagem>);
    findAll(): Promise<Postagem[]>;
}
