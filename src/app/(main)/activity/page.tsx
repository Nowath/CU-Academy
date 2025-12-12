"use client"
import React from "react"
import { Button } from "@heroui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import Image from "next/image"
import { Progress } from "@heroui/progress";
import {Divider} from "@heroui/divider";
import { ActivityCard } from "@/containers/activity/card.tsx"

export default function Activity() {
  return (
    <div className={`h-full w-full overflow-auto p-4 relative`}>
        <div className={`flex justify-between`}>
            <h3 className="text-3xl">กิจกรรม</h3>
            <div className={`flex gap-2`}>
                <Button className={`text-white bg-[var(--pink2)] ring-2 ring-[var(--pink1)]`} variant={`shadow`}>เพิ่มกิจกรรม</Button>
                <Button isIconOnly className={`text-white`} variant={`faded`}><i class="fa-solid fa-filter text-[var(--pink2)]"></i></Button>
            </div>
        </div>
        <div className={` mt-8 grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 `}>
            <ActivityCard
                id={`fesgdr3245`}
                title={`ผ่ากบกันจ้าา`}
                date={`20/12/2569`}
                image={`/card/test2.jpg`}
                isNew={true}
                desc={`dwawfwd`}
                amount={20}
                maxCapacity={120}
            />
        </div>
    </div>
  );
}
