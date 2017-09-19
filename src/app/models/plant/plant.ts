export interface PlantClient {
    PlantCode: string;
    Nombre: string;
    Duracion: string;
    Distancia: string;
    CTP: string;
}

export interface AllPlantList{
    PlantCode: string;
    Nombre: string;
}

export interface CommentsTest{
    postId: string;
    id: string;
    name: string;
    email: string;
    body:string;
}