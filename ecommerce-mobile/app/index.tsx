import {ActivityIndicator, FlatList, useWindowDimensions} from "react-native";
import ProductListItem from "../components/ProductListItem";
import {useBreakpointValue} from "@/components/ui/utils/use-break-point-value";
import {listProducts} from "@/api/products";
import {useQuery} from "@tanstack/react-query";

export default function HomeScreen() {
  // NOTE - hooks must come first!!
    // Another way to do the useEffect with state variables
  const {data, isLoading, error} = useQuery({
      queryKey: ['products'],
      queryFn: listProducts
  });
    // Also look into useMediaQuery
    const numColumns = useBreakpointValue({
        default: 2,
        sm: 3,
        xl: 4,
    });

    if (isLoading) {
        return <ActivityIndicator />;
    }

    if (error) {
        // @ts-ignore
        return <Text>Something went wrong fetching products.</Text>;
    }

  return (
      <FlatList data={data}
                key={numColumns}
                numColumns={numColumns}
                contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
                columnWrapperClassName="gap-2"
                renderItem={({ item }) => (
          <ProductListItem product={item} />
            )} />
  );
}