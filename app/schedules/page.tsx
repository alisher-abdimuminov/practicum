import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"



const schedules = [
    {
        "id": 1,
        "name": "Nomi",
        "weeks": ["Dushanba", "Payshanba", "Juma"],
        "groups": ["21_Bosh_ta'lim_01", "21_Bosh_ta'lim_02", "21_Bosh_ta'lim_03"],
        "location": "41-maktab",
    },
    {
        "id": 2,
        "name": "Nomi",
        "weeks": ["Dushanba", "Payshanba", "Juma"],
        "groups": ["21_Bosh_ta'lim_01", "21_Bosh_ta'lim_02", "21_Bosh_ta'lim_03"],
        "location": "41-maktab",
    },
    {
        "id": 3,
        "name": "Nomi",
        "weeks": ["Dushanba", "Payshanba", "Juma"],
        "groups": ["21_Bosh_ta'lim_01", "21_Bosh_ta'lim_02", "21_Bosh_ta'lim_03"],
        "location": "41-maktab",
    },
    {
        "id": 4,
        "name": "Nomi",
        "weeks": ["Payshanba", "Juma"],
        "groups": ["21_Bosh_ta'lim_01", "21_Bosh_ta'lim_02", "21_Bosh_ta'lim_03"],
        "location": "41-maktab",
    },
    {
        "id": 5,
        "name": "Nomi",
        "weeks": ["Dushanba", "Seshanba", "Juma"],
        "groups": ["21_Bosh_ta'lim_01", "21_Bosh_ta'lim_02", "21_Bosh_ta'lim_03"],
        "location": "41-maktab",
    },
    {
        "id": 6,
        "name": "Nomi",
        "weeks": ["Payshanba", "Shanba"],
        "groups": ["21_Bosh_ta'lim_01", "21_Bosh_ta'lim_02", "21_Bosh_ta'lim_03"],
        "location": "41-maktab",
    },
    {
        "id": 7,
        "name": "Nomi",
        "weeks": ["Seshanba", "Juma"],
        "groups": ["21_Bosh_ta'lim_01", "21_Bosh_ta'lim_02", "21_Bosh_ta'lim_03"],
        "location": "41-maktab",
    },
    {
        "id": 8,
        "name": "Nomi",
        "weeks": ["Dushanba", "Shanba",],
        "groups": ["21_Bosh_ta'lim_01", "21_Bosh_ta'lim_02", "21_Bosh_ta'lim_03"],
        "location": "41-maktab",
    },
    
];

export default function SchedulesPage() {
    return <>
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
            <Input placeholder="Qidirish" />
            <a href="/schedules/add" className={buttonVariants()}>Qo'shish</a>
            </div>
            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Nomi</TableHead>
                            <TableHead className="w-[100px]">Hafta kunlari</TableHead>
                            <TableHead>Guruhlar</TableHead>
                            <TableHead>Manzil</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {schedules.map((schedule) => (
                            <TableRow key={schedule.id}>
                                <TableCell className="font-medium w-full">
                                    {schedule.name}
                                </TableCell>
                                <TableCell className="font-medium">
                                    <div className="grid gap-2">
                                    {schedule.weeks.map((week) => (
                                        <Badge key={week}>{week}</Badge>
                                    ))}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="grid gap-2">
                                    {schedule.groups.map((group) => (
                                        <Badge key={group}>{group}</Badge>
                                    ))}
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium w-full">
                                    {schedule.location}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4}>Total</TableCell>
                            <TableCell className="text-right">{schedules.length}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    </>
}