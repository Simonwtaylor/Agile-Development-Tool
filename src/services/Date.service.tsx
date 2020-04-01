export class DateService {
  public static getDaysDifference(
    dateA: Date, 
    DateB: Date,
  ) {
    const utc1 = Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
    const utc2 = Date.UTC(DateB.getFullYear(), DateB.getMonth(), DateB.getDate());
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    const difference = Math.floor((utc2 - utc1) / _MS_PER_DAY);

    return difference;
  }

  public static formatDate(
    date: Date|string,
  ) {
    if (typeof date === "string") {
      const newDate = new Date(date);
      return newDate.toUTCString();
    }
    return date.toUTCString();
  }
}
