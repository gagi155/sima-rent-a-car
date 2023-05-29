import jsonfile from "jsonfile";
import IEntity from "../model/IEntity";

export default class Repository {
    path: string = "";

    getAll(): IEntity[] {
        return jsonfile.readFileSync(this.path);
    }

    getById(id: Number) {
        this.getAll().filter((entity) => entity.id == id);
    }

    save(entity: IEntity) {
        jsonfile.readFileSync(this.path);
    }

    update(entity: IEntity) {
        const list = this.getAll();
        list.splice(
            list.findIndex((x) => x.id === entity.id),
            1,
            entity
        );

        jsonfile.writeFileSync(this.path, list);
    }

    delete(id: number) {
        const list = this.getAll();
        const deletedEntity: IEntity = list.splice(
            list.findIndex((x) => x.id === id),
            1
        )[0];

        deletedEntity.deleted = true;
        this.update(deletedEntity);
    }
}
