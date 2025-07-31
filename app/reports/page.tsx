"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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


const students = [
    {
        "id": "3420241101393",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "status": "arrived",
        "time": "08:00",
    },
    {
        "id": "3202411013931",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "status": "arrived",
        "time": "08:12"
    },
    {
        "id": "3202411013934",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "status": "late",
        "time": "12:34"
    },
    {
        "id": "3202411013935",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "status": "late",
        "time": "13:45"
    },
    {
        "id": "3202411013936",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "status": "arrived",
        "time": "08:39"
    },
    {
        "id": "3202411013937",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "status": "late",
        "time": "11:23"
    },
    {
        "id": "3202411013938",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "status": "late",
        "time": "10:09"
    },
    {
        "id": "3202411013939",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "status": "late",
        "time": "11:11"
    },
    {
        "id": "32024110139310",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "status": "arrived",
        "time": "08:01"
    },

];


export default function ReportsPage() {
    const [date, setDate] = React.useState<Date | undefined>(
        new Date(2025, 5, 12)
    )

    return <>
        <div className="flex flex-col gap-5">
            <Calendar
                mode="single"
                defaultMonth={date}
                numberOfMonths={2}
                selected={date}
                onSelect={setDate}
                className="rounded-lg border shadow-sm"
            />
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder={"Guruhni tanlang"} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={"21_Bosh_talim_01"}>21_Bosh_talim_01</SelectItem>
                </SelectContent>
            </Select>

            <div className="border rounded-md">
                <Table className="z-0">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Hemis ID</TableHead>
                            <TableHead className="w-[100px]">Ism familiya</TableHead>
                            <TableHead>Fakultet</TableHead>
                            <TableHead>Guruh</TableHead>
                            <TableHead className="text-right">Holati</TableHead>
                            <TableHead className="text-right">Vaqti</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell className="font-medium">{student.id}</TableCell>
                                <TableCell className="font-medium">{student.name}</TableCell>
                                <TableCell>{student.fakultet}</TableCell>
                                <TableCell>{student.group}</TableCell>
                                <TableCell className="text-right">
                                    {student.status === 'arrived' && 
                                        <span className="text-green-500">Kelgan</span>
                                    }
                                    {student.status === 'late' &&
                                        <span className="text-orange-500">Kech qolgan</span>
                                    }
                                </TableCell>
                                <TableCell className="text-right">
                                    {student.status === 'arrived' && 
                                        <span className="text-green-500">{student.time}</span>
                                    }
                                    {student.status === 'late' &&
                                        <span className="text-orange-500">{student.time}</span>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={5}>Total</TableCell>
                            <TableCell className="text-right">{students.length}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    </>
}