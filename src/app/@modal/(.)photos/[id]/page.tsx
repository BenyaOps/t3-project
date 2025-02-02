import { getImage } from "~/server/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
    params: { id: photoId },
}: {params: { id: string } }) {
    const isAsNumber = Number(photoId);
    if (Number.isNaN(isAsNumber)) {
        throw new Error("Invalid photo ID");
    }
    const image = await getImage(isAsNumber);
    return (
        <Modal>
            <h1>{image.title}</h1>
            <img src={image.url ?? ""} alt={image.title ?? "modal"} className="w-96" />
        </Modal>
    )};