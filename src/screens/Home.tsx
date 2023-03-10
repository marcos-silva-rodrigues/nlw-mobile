import { Text, View, ScrollView } from "react-native";
import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { generateDateFromYearBeginning } from "../utils/generate-date-from-year-beginning";
import { Header } from "../components/Header";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateDateFromYearBeginning();
const minimumSummaryDatesSize = 18 * 5; // 18 weeks
const amountOfDayToFill = minimumSummaryDatesSize - datesFromYearStart.length;

export function HomeScreen() {
	return (
		<View className="flex-1 bg-background px-8 pt-16">
			<Header />

			<View className="flex-row mt-6 mb-2">
				{weekDays.map((day, index) => (
					<Text
						key={`${day}_${index}`}
						className="text-zinc-400 text-xl font-bold text-center mx-1"
						style={{ width: DAY_SIZE }}
					>
						{day}
					</Text>
				))}
			</View>

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: 100
				}}
			>
				<View className="flex-row flex-wrap">
					{datesFromYearStart.map(date => (
						<HabitDay key={date.toString()} />
					))}

					{amountOfDayToFill > 0 && Array.from({ length: amountOfDayToFill }).map((_, index) => (
						<View
							key={index}
							className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
							style={{
								width: DAY_SIZE,
								height: DAY_SIZE
							}}
						/>
					))}
				</View>
			</ScrollView>


		</View>
	);
}
