import { Modal } from "~/app/@modal/(.)photos/[id]/modal";
import { getImage } from "~/server/queries";

async function PhotoModal({
    params: { id: photoId },
}: {params: { id: string } }) {
    const idIsNumber = Number(photoId);
    if (Number.isNaN(idIsNumber)) {
        return <div>Invalid photo ID</div>;
    }
    const image = await getImage(parseInt(photoId));
    return (
        <Modal>
            <img src={image.url ?? ""}  title={image.title ?? "image"} className="w-96"/>
            <p>This is a photo modal.</p>
        </Modal>
    )};
export default PhotoModal;