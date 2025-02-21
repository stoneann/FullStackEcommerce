import {Slot, Stack} from "expo-router";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {StyleSheet, View} from "react-native";
import "@/global.css";

// Rendered first then the index.tsx
// Global Providers are rendered here
export default function RootLayout() {
    return (
        <GluestackUIProvider mode="light">
                <Stack>
                    {/*<Stack.Screen name={} />*/}
                </Stack>
        </GluestackUIProvider>
    );
}