import { ColorPalette, CommentForm, Comments, FavoriteButton } from "../";
import { ListItem } from "../ArtPiecePreview/ArtPiecePreview.style";
import { StyledImageContainer } from "../ArtPieceDetails/ArtPieceDetails.style";
import {
  PieceImage,
  HingeAnimation,
} from "../ArtPieceContainer/ArtPieceContainer.style";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/storeHooks";
import { selectAlarm, startAlarm } from "../../store/alarm/alarmSlice";
import { handleTouch } from "../../utils/handleTouch";
import {
  setTouchedPiece,
  resetTouchedPiece,
  selectTouchedPiece,
} from "../../store/touchedPiece/touchedPieceSlice";
import { IPiece } from "../../types/types";

export function ArtPieceDetails({ piece }: { piece: IPiece }) {
  console.log(piece);

  const { name, artist, slug, colors, imageSource: imageURL } = piece;
  const isAlarm = useAppSelector(selectAlarm);
  const touchedPiece = useAppSelector(selectTouchedPiece);
  const dispatch = useAppDispatch();

  return (
    <ListItem>
      <h3>{name}</h3>
      <HingeAnimation
        onClick={(event) =>
          handleTouch(slug, dispatch, startAlarm, setTouchedPiece, event)
        }
        onTouchStart={(event) =>
          handleTouch(slug, dispatch, startAlarm, setTouchedPiece, event)
        }
        clicked={isAlarm && touchedPiece === slug}
        onAnimationEnd={() => resetTouchedPiece()}
      >
        <StyledImageContainer>
          <PieceImage src={imageURL} alt={name} width={360} height={240} />
          <FavoriteButton slug={slug} />
        </StyledImageContainer>
      </HingeAnimation>
      <h4>by {artist}</h4>
      <ColorPalette colors={colors} />
      <CommentForm title={name} />
      <Comments title={name} />
    </ListItem>
  );
}
