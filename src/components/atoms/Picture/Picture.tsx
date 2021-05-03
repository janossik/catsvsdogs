import {
  LoadingPicture,
  LoadedPicture,
} from "components/atoms/Picture/Picture.styles";

const Picture = ({
  loading,
  src,
  alt,
}: {
  loading?: boolean;
  src: string;
  alt?: string;
}) => {
  if (loading) {
    return (
      <LoadingPicture as="div">
        <span></span>
      </LoadingPicture>
    );
  }
  return <LoadedPicture src={src} alt={alt} />;
};

export default Picture;
