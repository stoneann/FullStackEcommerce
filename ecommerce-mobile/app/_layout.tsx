import {Slot, Stack} from "expo-router";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

// Rendered first then the index.tsx
// Global Providers are rendered here
export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider mode="light">
                    <Stack>
                        {/*<Stack.Screen name={} />*/}
                    </Stack>
            </GluestackUIProvider>
        </QueryClientProvider>
    );
}