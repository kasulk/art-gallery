import { ArtPiecePreview, LoadingSpinner } from "..";
import { ArtPiecesProps as Props } from "../../types/types";

export function ArtPieces({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isLoading,
  setIsAlarm,
}: Props) {
  //
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <h2>All Art Pieces</h2>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            piece={piece}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
            setIsAlarm={setIsAlarm}
          />
        ))}
      </ul>
    </>
  );
}
