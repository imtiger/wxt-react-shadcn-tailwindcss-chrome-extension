// HomePage.js
import React from "react";
import {Card} from "@/components/ui/card.tsx";
import {useTranslation} from "react-i18next";

export function Home() {
    const {t} = useTranslation();
    const references = [
        {
            name: "Wxt",
            url: "https://wxt.dev/"
        },
        {
            name: "React",
            url: "https://react.dev/"
        },
        {
            name: "Tailwind css",
            url: "https://tailwindcss.com/"
        },
        {
            name: "Shadcn UI",
            url: "https://ui.shadcn.com/"
        }
    ]
    return (
        <div className="grid gap-4">
            <Card className="text-left">
                <div className="flex flex-col space-y-1.5 p-6 pb-3">
                    <h3 className="font-semibold leading-none tracking-tight text-base">{t("introduce")}</h3>
                    <p className="text-sm max-w-lg text-balance leading-relaxed">
                        {t("description")}
                    </p>
                </div>
            </Card>
            <Card className="text-left">
                <div className="flex flex-col space-y-1.5 p-6 pb-3">
                    <h3 className="font-semibold leading-none tracking-tight text-base">{t("reference")}</h3>
                    <div className="flex flex-col gap-4 pt-2">
                        {
                            references.map((reference, index, array) => {
                                return (
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            {reference.name}
                                        </p>
                                        <a className="text-sm text-muted-foreground" href={reference.url}
                                           target="_blank">{reference.url}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Card>
        </div>

    )
}









