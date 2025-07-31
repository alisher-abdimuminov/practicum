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



const students = [
    {
        "id": "3420241101393",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "gpa": "3.5"
    },
    {
        "id": "3202411013931",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "gpa": "3.5"
    },
    {
        "id": "3202411013934",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "gpa": "3.5"
    },
    {
        "id": "3202411013935",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "gpa": "3.5"
    },
    {
        "id": "3202411013936",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "gpa": "3.5"
    },
    {
        "id": "3202411013937",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "gpa": "3.5"
    },
    {
        "id": "3202411013938",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "gpa": "3.5"
    },
    {
        "id": "3202411013939",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "gpa": "3.5"
    },
    {
        "id": "32024110139310",
        "name": "QARSHIYEV JASUR JASUR O'G'LI",
        "group": "21_Bosh_ta'lim_08",
        "fakultet": "Tillar",
        "tolov_shakli": "To'lov shartnoma",
        "gpa": "3.5"
    },

];

export default function StudentsPage() {
    return <>
        <div className="flex flex-col gap-5">
            <Input placeholder="Qidirish" />
            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Hemis ID</TableHead>
                            <TableHead className="w-[100px]">Ism familiya</TableHead>
                            <TableHead>Fakultet</TableHead>
                            <TableHead>Guruh</TableHead>
                            <TableHead className="text-right">GPA</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell className="font-medium">{student.id}</TableCell>
                                <TableCell className="font-medium">{student.name}</TableCell>
                                <TableCell>{student.fakultet}</TableCell>
                                <TableCell>{student.group}</TableCell>
                                <TableCell className="text-right">{student.gpa}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4}>Total</TableCell>
                            <TableCell className="text-right">{students.length}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    </>
}