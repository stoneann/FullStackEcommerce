import {Slot, Stack} from "expo-router";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {StyleSheet, View} from "react-native";
import "@/global.css";

// Rendered first then the index.tsx
// Global Providers are rendered here
export default function RootLayout() {
    return (
        <GluestackUIProvider mode="light">
            <View style={styles.container}>
                <Stack />
            </View>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});