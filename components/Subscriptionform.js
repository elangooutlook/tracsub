function Subscriptionform({ handl }) {
    const [subscriptionName, setSubscriptionName] = useState('');
    const initialSubscriptions = ['Netflix',
        'Spotify',
        'Amazon Prime',
        'Hulu',
        'Disney+',
        'Apple Music',
        'HBO Max',
        'YouTube Premium',
        'Audible',
        'Crunchyroll',
        'Paramount+',
        'Peacock',
        'Showtime',
        'Starz',
        'CBS All Access',
        'Tidal',
        'Sling TV',
        'ESPN+',
        'Adobe Creative Cloud',
        'Microsoft Office 365'];
    const [suggestedSubscriptions, setSuggestedSubscriptions] = useState([]);

    const handleSubscriptionNameChange = (e) => {
        const inputValue = e.target.value;
        setSubscriptionName(inputValue);

        if (inputValue === '') {
            setSuggestedSubscriptions([]);
        } else {
            const filteredSubscriptions = initialSubscriptions.filter((subscription) =>
                subscription.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSuggestedSubscriptions(filteredSubscriptions);
        }
    };

    const handleSubscriptionClick = (subscription) => {
        setSubscriptionName(subscription);
        setSuggestedSubscriptions([]);
    };

    return (


        <Card className="w-full h-full max-w-2xl">
            <div className="flex items-center justify-start w-full p-4">
                <button
                    className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    onClick={() => { handl(false) }}
                >
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Back
                </button>
            </div>
            <CardHeader>
                <CardTitle>Add Subscription</CardTitle>
                <CardDescription>Fill your new subscription details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="subscription-name">Subscription Name</Label>
                    <Input id="subscription-name" placeholder="Enter subscription name" value={subscriptionName}
                        onChange={handleSubscriptionNameChange} />
                    {suggestedSubscriptions.length > 0 && (
                        <ul>
                            {suggestedSubscriptions.map((subscription, index) => (
                                <li key={index} onClick={() => handleSubscriptionClick(subscription)}>
                                    {subscription}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="cost">Cost</Label>
                        <Input id="cost" placeholder="Enter cost" type="number" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select>
                            <SelectTrigger id="currency">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="usd">USD</SelectItem>
                                <SelectItem value="eur">EUR</SelectItem>
                                <SelectItem value="gbp">GBP</SelectItem>
                                <SelectItem value="jpy">JPY</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="subscription-date">Subscription Date</Label>
                    <Input id="subscription-date" type="date" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="period">Period</Label>
                        <Select>
                            <SelectTrigger id="period">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="annually">Annually</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="payment-type">Payment Type</Label>
                        <Select>
                            <SelectTrigger id="payment-type">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cash">Cash</SelectItem>
                                <SelectItem value="credit-card">Credit Card</SelectItem>
                                <SelectItem value="debit-card">Debit Card</SelectItem>
                                <SelectItem value="bank-account">Bank Account</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                        <SelectTrigger id="category">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="streaming">Streaming</SelectItem>
                            <SelectItem value="music">Music</SelectItem>
                            <SelectItem value="productivity-tools">Productivity Tools</SelectItem>
                            <SelectItem value="educational-platforms">Educational Platforms</SelectItem>
                            <SelectItem value="news">News</SelectItem>
                            <SelectItem value="travel">Travel</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="reminder">Reminder</Label>
                    <Input id="reminder" placeholder="Enter number of days for reminder" type="number" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="type">Type</Label>
                        <Select>
                            <SelectTrigger id="type">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="recurring">Recurring</SelectItem>
                                <SelectItem value="one-time">One Time</SelectItem>
                                <SelectItem value="trial">Trial</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="plan-name">Plan Name</Label>
                        <Select>
                            <SelectTrigger id="plan-name">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="basic">Basic</SelectItem>
                                <SelectItem value="standard">Standard</SelectItem>
                                <SelectItem value="premium">Premium</SelectItem>
                                <SelectItem value="enterprise">Enterprise</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" placeholder="Enter any additional notes here" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="ml-auto">Submit</Button>
            </CardFooter>
        </Card>
    )
}