import React from "react";
import {I18nSettings} from "@/components/settings/i18n-settings.tsx";
import {ThemeSettings} from "@/components/settings/theme-settings.tsx";

export function SettingsPage() {
    return (
        <div className="grid gap-4">
            <I18nSettings/>
            <ThemeSettings/>
        </div>
    )
}

