import {Text} from "@/components/ui/text";
import {Stack, useLocalSearchParams} from "expo-router";
import products from '@/assets/products.json';
import {Image} from "@/components/ui/image";
import {VStack} from "@/components/ui/vstack";
import {Heading} from "@/components/ui/heading";
import {Box} from "@/components/ui/box";
import {Button, ButtonText} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {useQuery} from "@tanstack/react-query";
import {fetchProductById} from "@/api/products";
import {useCart} from "@/store/cartStore";

export default function ProductDetailsScreen() {
    const {id} = useLocalSearchParams<{id: string}>();
    // TanStack query will cache results so if the you revisit a page it won't resend the api request
    const {data: product, isLoading, error} = useQuery({
        // what identifies this reqest as unique
        queryKey: ['products', id],
        queryFn: () => fetchProductById(Number(id)),
    });

    // @ts-ignore
    const addProduct = useCart(state => state.addProduct);

    const addToCart = () => {
        console.log("addToCart");
        addProduct(product);
    }

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Product not found</Text>;

    if (!product) {
        return <Text>No product found!</Text>;
    }

    return (
        <Box className="flex-1 items-center w-full">
            <Stack.Screen options={{title: product.name}}/>
            <Card className="p-5 rounded-lg w-3/12 flex-1">
                <Image
                    source={{
                        uri: product.image,
                    }}
                    className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
                    alt={`${product.name} image`}
                    resizeMode="contain"
                />
                <Text
                    className="text-sm font-normal mb-2 text-typography-700"
                >
                    {product.name}
                </Text>
                <VStack className="mb-6">
                    <Heading size="md" className="mb-4">
                        {product.price}
                    </Heading>
                    <Text size="sm">
                        {product.description}
                    </Text>
                </VStack>
                <Box
                    className="flex-col sm:flex-row"
                >
                    <Button
                        className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1"
                    >
                        <ButtonText size="sm" onPress={addToCart}>Add to cart</ButtonText>
                    </Button>
                    <Button
                        variant="outline"
                        className="px-4 py-2 border-outline-300 sm:flex-1"
                    >
                        <ButtonText
                            size="sm"
                            className="text-typography-600"
                        >
                            Wishlist
                        </ButtonText>
                    </Button>
                </Box>
            </Card>
        </Box>
    )
}