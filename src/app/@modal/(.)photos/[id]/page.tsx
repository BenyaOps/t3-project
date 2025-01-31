export default function PhotoModal({
    params: { id: photoId },
}: {params: { id: string } }) {
    return (
        <div>
            <h1>Photo {photoId}</h1>
            <p>This is a photo modal.</p>
        </div>
    )};