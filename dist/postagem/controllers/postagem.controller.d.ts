import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../services/postagem.service";
export declare class PostagemController {
    private readonly postagemService;
    constructor(postagemService: PostagemService);
    findall(): Promise<Postagem[]>;
}
