import { useRouter } from "next/router";
import Image from "next/image";
import FavoriteButton from "../../components/FavoriteButton";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function DetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log("Slug: ", pieces);

  const selectedImage = pieces.find((piece) => piece.slug === slug);
  if (!selectedImage) {
    return;
  }

  return (
    <div>
      <h2>{selectedImage.name}</h2>
      <div className="favoriteDiv">
        <Image
          src={selectedImage.imageSource}
          alt={selectedImage.name}
          width={360}
          height={240}
        />
        <FavoriteButton />
      </div>
      <h3>of {selectedImage.artist}</h3>
    </div>
  );
}
