import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"


const groups = [
    "21_Bosh_ta'lim_01",
    "21_Bosh_ta'lim_02",
    "21_Bosh_ta'lim_03",
    "21_Bosh_ta'lim_04",
    "21_Bosh_ta'lim_05",
    "21_Bosh_ta'lim_06",
    "21_Bosh_ta'lim_07",
    "21_Bosh_ta'lim_08",
    "21_Bosh_ta'lim_09",
    "21_Bosh_ta'lim_10",
];


export default function () {
    return <>
        <div className="flex flex-col gap-5">
            <Label>Nomi</Label>
            <Input />
            <Label>Hafta kunlari</Label>
            <ToggleGroup variant="outline" type="multiple">
                <ToggleGroupItem value="monday" aria-label="Toggle bold">
                    Dushanba
                </ToggleGroupItem>
                <ToggleGroupItem value="tuesday" aria-label="Toggle italic">
                    Seshanba
                </ToggleGroupItem>
                <ToggleGroupItem value="wednesday" aria-label="Toggle strikethrough">
                    Chorshanba
                </ToggleGroupItem>
                <ToggleGroupItem value="thursday" aria-label="Toggle bold">
                    Payshanba
                </ToggleGroupItem>
                <ToggleGroupItem value="friday" aria-label="Toggle italic">
                    Juma
                </ToggleGroupItem>
                <ToggleGroupItem value="saturday" aria-label="Toggle strikethrough">
                    Shanba
                </ToggleGroupItem>
            </ToggleGroup>
            <Label>Guruhlar</Label>
            <ToggleGroup className="grid grid-cols-1 md:grid-cols-4 gap-3" type="multiple">
                {groups.map((group) => (
                    <ToggleGroupItem className="border rounded-md" value={group} key={group} aria-label="Toggle bold">
                    {group}
                </ToggleGroupItem>
                ))}
            </ToggleGroup>
            <div>
            <Button>Saqlash</Button>
            </div>
        </div>
    </>
}