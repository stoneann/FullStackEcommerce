import {View, Text, FlatList} from "react-native";
import {useCart} from "@/store/cartStore";
import {Box} from "@/components/ui/box";
import {HStack} from "@/components/ui/hstack";
import {VStack} from "@/components/ui/vstack";
import {Button} from "@/components/ui/button";
import {ButtonText} from "@/components/ui/button";
import {Redirect} from "expo-router";

export default function CartScreen() {
    const items = useCart((state: any) => state.items);
    const resetCart = useCart((state: any) => state.resetCart);

    const onCheckout = async () => {
        resetCart();
    }

    if (items.length == 0) {
        return <Redirect href="/" />;
    }

    return (
        <FlatList data={items}
                  contentContainerClassName="gap-2 max-w=[960px]"
                  renderItem={({ item }) => (
                      <HStack className="bg-white p-3">
                          <VStack space="sm">
                              <Text className="font-bold">{item.product.name}</Text>
                              <Text>{item.product.price}</Text>
                          </VStack>
                          <Text className="ml-auto">{item.quantity}</Text>
                      </HStack>
                  )}
                  ListFooterComponent={() => (
                      <Button onPress={onCheckout}>
                          <ButtonText>Checkout</ButtonText>
                      </Button>
                  )}
        />
    );
}