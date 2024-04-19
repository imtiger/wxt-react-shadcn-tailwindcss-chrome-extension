import {Label} from "@/components/ui/label"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Card} from "@/components/ui/card.tsx";
import {browser} from "wxt/browser";
import {MessageType} from "@/entrypoints/types.ts";
import {useTheme} from "@/components/theme-provider.tsx";
import {useTranslation} from "react-i18next";

export function ThemeSettings() {
    const {theme, toggleTheme} = useTheme();
    const themes = ["light", "dark"]
    const {t} = useTranslation();
    return (
        <Card>
            <div className="space-y-1.5 p-6 pb-3">
                <h3 className="font-semibold text-left text-base">{t('themeSettings')}</h3>
            </div>
            <RadioGroup defaultValue={theme} value={theme} className="p-6 pt-2">
                {
                    themes && themes.map((theme, index, array) => {
                        return (
                            <div key={index} className="flex items-center space-y-1.5 justify-between"
                                 onClick={async () => {
                                     toggleTheme(theme)
                                     await browser.runtime.sendMessage({
                                         messageType: MessageType.changeTheme,
                                         content: theme
                                     });
                                     await browser.storage.local.set({theme: theme});
                                 }}>
                                <Label htmlFor={`r${index}`}>{theme}</Label>
                                <RadioGroupItem value={theme} id={`r${index}`}/>
                            </div>
                        );
                    })
                }
            </RadioGroup>
        </Card>

    )
}
