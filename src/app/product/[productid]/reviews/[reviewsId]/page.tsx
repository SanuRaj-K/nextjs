export default function ReviewsDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <>
      <h1>ReviewsDetails {params.productId}</h1>
    </>
  );
}
