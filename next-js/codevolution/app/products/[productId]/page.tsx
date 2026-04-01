import { Metadata } from "next";

/*
  Define the type of props received by this page
  params contains dynamic route values from URL
*/
type Props = {
  params: { productId: string };
};

/*
  This function generates dynamic metadata (like page title)
*/
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {

  // Get productId from params
  const id = params.productId;
    
  // Return metadata object
  return {
    title: `Product ${id}`,
  };
};

/*
  Main page component
*/
export default function ProductsDetails({ params }: Props) {

  // Extract productId from params
  const { productId } = params;

  return (
    <p>
      Product Details Page {productId}
    </p>
  );
}