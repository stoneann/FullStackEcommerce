import {Link, Slot, Stack} from "expo-router";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Icon} from "@/components/ui/icon";
import {LogInIcon, ShoppingCart} from "lucide-react-native";
import {Pressable} from "react-native";
import {useCart} from "@/store/cartStore";
import {HStack} from "@/components/ui/hstack";

const queryClient = new QueryClient();

// Rendered first then the index.tsx
// Global Providers are rendered here
export default function RootLayout() {
    const cartItemsNum: number = useCart((state: any) => state.items.length);

    // @ts-ignore
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider mode="light">
                <Stack screenOptions={{ headerRight: () => <Link href={'/cart'} asChild>
                        <Pressable className="flex-row gap-2">
                            <Icon as={ShoppingCart} />
                            {/*<Text>${cartItemsNum}</Text>*/}
                        </Pressable>
                    </Link>,
                    headerLeft: () => <Link href={'/login'} asChild>
                        <Pressable className="flex-row gap-2">
                            <Icon as={LogInIcon} />
                            {/*<Text>${cartItemsNum}</Text>*/}
                        </Pressable>
                    </Link>
                }}>
                        <Stack.Screen name="index" options={{title: 'Home'}} />
                    </Stack>
            </GluestackUIProvider>
        </QueryClientProvider>
    );
}