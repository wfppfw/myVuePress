import { usePreferredDark, useStorage } from "@vueuse/core";
import { computed, inject, onMounted, onUnmounted, provide, ref, watch } from "vue";
export const darkModeSymbol = Symbol(
/* eslint-disable no-undef */
__VUEPRESS_DEV__ ? "darkMode" : "");
/**
 * Inject dark mode global computed
 */
export const useDarkMode = () => {
    const mode = inject(darkModeSymbol);
    if (!mode) {
        throw new Error("useDarkMode() is called without provider.");
    }
    return mode;
};
/**
 * Create dark mode ref and provide as global computed in setup
 */
export const setupDarkMode = () => {
    const modeStorage = useStorage("vuepress-color-scheme", "auto");
    const currentMode = computed({
        get() {
            // storage value
            return modeStorage.value;
        },
        set(val) {
            modeStorage.value = val;
        }
    });
    const isDarkMode = ref(false);
    provide(darkModeSymbol, { currentMode, isDarkMode });
    updateHtmlDarkClass(currentMode, isDarkMode);
};
export const updateHtmlDarkClass = (currentMode, isDarkMode) => {
    const isDarkPreferred = usePreferredDark();
    const update = () => {
        // auto detected from prefers-color-scheme
        isDarkMode.value =
            currentMode.value === "auto"
                ? isDarkPreferred.value
                : currentMode.value === "dark";
        // set `class="dark"` on `<html>` element
        const htmlEl = window?.document.querySelector("html");
        htmlEl?.classList.toggle("dark", isDarkMode.value);
    };
    onMounted(() => {
        watch([currentMode, isDarkPreferred], update, { immediate: true });
    });
    onUnmounted(() => update());
};
