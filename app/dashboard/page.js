"use client"
import Link from "next/link"
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { CardTitle,  CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { GiBearFace } from "react-icons/gi";
import { IoBagCheckSharp,IoSettings,IoPieChart } from "react-icons/io5";
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { BsRobot } from "react-icons/bs";



var data = {
  "email": "elango5292@gmail.com",
  "subscriptions": [
    {
      "id": "1",
      "name": "Netflix",
      "cost": "10",
      "currency": "INR",
      "date": "2024-01-16",
      "valid": true,
      "period": "daily",
      "nextPayment": "2024-01-17",
      "paymentType": "Cash",
      "category": "Entertainment",
      "reminder": "3",
      "type": "Recurring",
      "notes": "This is a note for Netflix.",
      "plan-name": "Basic",
      "url": "https://www.netflix.com"
    },
    {
      "id": "2",
      "name": "Amazon",
      "cost": "150",
      "currency": "INR",
      "date": "2024-01-15",
      "valid": false,
      "period": "monthly",
      "nextPayment": "No",
      "paymentType": "Credit Card",
      "category": "Sports",
      "reminder": "3",
      "type": "One time",
      "notes": "This is a note for Amazon Prime Video.",
      "plan-name": "Premium",
      "url": "https://www.primevideo.com"
    },
    {
      "id": "3",
      "name": "Disney+",
      "cost": "30",
      "currency": "INR",
      "date": "2024-01-14",
      "valid": true,
      "period": "weekly",
      "nextPayment": "2024-01-21",
      "paymentType": "Debit Card",
      "category": "Productivity",
      "reminder": "3",
      "type": "Recurring",
      "notes": "This is a note for Disney+.",
      "plan-name": "Basic",
      "url": "https://www.disneyplus.com"
    },
    {
      "id": "4",
      "name": "Hulu",
      "cost": "20",
      "currency": "INR",
      "date": "2024-01-13",
      "valid": true,
      "period": "annually",
      "nextPayment": "NO",
      "paymentType": "Bank Account",
      "category": "Productivity",
      "reminder": "3",
      "type": "One time",
      "notes": "This is a note for Hulu.",
      "plan-name": "Premium",
      "url": "https://www.hulu.com"
    },
    {
      "id": "5",
      "name": "Apple Music",
      "cost": "50",
      "currency": "INR",
      "date": "2024-01-12",
      "valid": true,
      "period": "daily",
      "nextPayment": "2024-01-13",
      "paymentType": "Credit Card",
      "category": "Entertainment",
      "reminder": "3",
      "type": "Recurring",
      "notes": "This is a note for Apple Music.",
      "plan-name": "Basic",
      "url": "https://www.apple.com/apple-music/"
    }
  ]
}

const prevMonthsTotals = [12, 32, 43, 45]; 



export default function Component() {
  const [nav,setnav]=useState(1)
  const [selectedPeriod, setSelectedPeriod] = useState('month');
// month , day , weekly , yearly 
  useEffect((


  )=>{setnav(1)},[])
  return (
    <div key="1" className="h-full flex overflow-hidden bg-gray-100 dark:bg-gray-900">
      <ResizablePanelGroup className="h-full" direction="horizontal">
        <ResizablePanel defaultSize={10} maxSize={12} minSize={6}>
          <div className="flex z-20 flex-col w-full h-full bg-white dark:bg-gray-800">
            <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold">Navigation</h2>
            </header>
            <nav className="flex-1 overflow-y-auto scrollbar-hide">
              <button
                className="block flex gap-1 flex-row items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700"
                onClick={() => setnav(1)}
              >
              <IoBagCheckSharp className="h-5 w-5 " />

<p>
                Subscriptions
            </p>
              </button>
              <button
                className="block flex gap-1 flex-row items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700"
                onClick={()=>{setnav(2)}}
              >
                <IoPieChart className="h-5 w-5 " />
                <p>
               Analyze</p>
              </button>
              <button
                className="block gap-1 flex flex-row items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700"
                onClick={()=>{setnav(3)}}
              >
                 <IoSettings className="h-5 w-5 " />
<p>
                Settings</p>
              </button>
             
            </nav>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
        <header className="flex h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <div className="w-full flex-1">
          
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <GiBearFace className="w-6 h-6"/>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

        {nav === 1 ? <Subscriptions/> : nav === 2 ? <Analyze/> : <Settings/>}

        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}



function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function Subscriptionform({handl}){
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

  const [formData, setFormData] = useState({
    name: '',
    cost: '',
    currency: '',
    date: '',
    period: '',
    paymentType: '',
    category: '',
    reminder: '',
    type: '',
    planName: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to your backend or state management store
    console.log(formData);
  };


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

  return(
 

     <Card className="w-full h-full m-3 max-w-2xl">
       <div className="flex items-center justify-start w-full p-4">
      <button 
        className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        onClick={()=>{handl(false)}}
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
             <Input id="cost" placeholder="Enter cost" type="number" name="cost" value={formData.cost} onChange={handleChange} />
           </div>
           <div className="space-y-2">
             <Label htmlFor="currency">Currency</Label>
             <select id="currency" name="currency" value={formData.currency} onChange={handleChange}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="jpy">JPY</option>
        </select>
           </div>
         </div>
         <div className="space-y-2">
           <Label htmlFor="subscription-date">Subscription Date</Label>
           <Input id="subscription-date" name="date" type="date" value={formData.date} onChange={handleChange} />
         </div>
         <div className="grid grid-cols-2 gap-4">
           <div className="space-y-2">
             <Label htmlFor="period">Period</Label>
             <select id="period" name="period" value={formData.period} onChange={handleChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>
        </select>
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

function Subscriptions() {
  const periods = ['Daily', 'Weekly', 'Monthly', 'Annually'];
  const paymentTypes = ['Cash', 'Credit Card', 'Debit Card', 'Bank Account'];
  const activeStatuses = ['Active', 'Inactive'];
  const categories = ['Streaming', 'Music', 'Productivity',"Tools", 'Educational', 'News', 'Travel', 'Lifestyle', 'Other'];
const [showform,setshowform] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const filteredSubscriptions = data.subscriptions.filter(subscription => {
    // Check for case-insensitive match in name or plan-name
    return subscription.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           subscription['plan-name'].toLowerCase().includes(searchQuery.toLowerCase());
  });


  const defaultFilters = {
    active: "Activity",
    category: "Category",
    paymentType: "Payment Type",
    period: "Period"
  };

  const [filters, setFilters] = useState(defaultFilters);

  const handleSelect = (filterName, value) => {
    setFilters(prevFilters => {
      const prevSelections = prevFilters[filterName];
      if (prevSelections.includes(value)) {
        // If the item is already selected, remove it from the selections
        return {
          ...prevFilters,
          [filterName]: [ value]
        };
      } else {
        // If the item is not selected, add it to the selections
        return {
          ...prevFilters,
          [filterName]: [ value]
        };
      }
    });
  };

  const handleReset = (filterName) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: []
    }));
  };

  return (
    <div key="1" className="flex  z-10 flex-col h-auto">
   

     
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Manage Subscriptions</h1>
        <div className="flex items-center space-x-2">
          
          <Button onClick={()=>{setshowform(true)}} variant="primary">+ Add Subscription</Button>
        </div>
      </header>


{showform? <Subscriptionform handl = {setshowform}/> :
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        
        <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
         
          <div className=" flex flex-row gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscriptions</CardTitle>
              </CardHeader>
              <div key="1" className="container my-3 px-4 md:px-6 grid gap-10 items-start">
      <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
        <div className="text-sm font-semibold pl-4 sm:pl-0">Filters:</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
            {filters.active.length ? filters.active: "Activity" }
              <PlusIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuCheckboxItem onSelect={() => handleSelect('active', "Activity")}>None</DropdownMenuCheckboxItem>
            {activeStatuses.map((status) => (
    <DropdownMenuCheckboxItem key={status} onSelect={() => handleSelect('active', status)}>
      {status}
    </DropdownMenuCheckboxItem>
  ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {filters.category.length ? filters.category: "Category" }
              <PlusIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuCheckboxItem onSelect={() => handleSelect('category', "Category")}>None</DropdownMenuCheckboxItem>
            {categories.map((category) => (
    <DropdownMenuCheckboxItem key={category} onSelect={() => handleSelect('category', category)}>
      {category}
    </DropdownMenuCheckboxItem>
  ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
            {filters.paymentType.length ? filters.paymentType: " Payment Type" }
              <PlusIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuCheckboxItem onSelect={() => handleSelect('paymentType', "Payment Type")}>None</DropdownMenuCheckboxItem>
            {paymentTypes.map((paymentType) => (
    <DropdownMenuCheckboxItem key={paymentType} onSelect={() => handleSelect('paymentType', paymentType)}>
      {paymentType}
    </DropdownMenuCheckboxItem>
  ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
            {filters.period ? filters.period: "Period" }
              <CalendarDaysIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuCheckboxItem onSelect={() => handleSelect('period', "Period")}>None</DropdownMenuCheckboxItem>
            {periods.map((period) => (
    <DropdownMenuCheckboxItem key={period} onSelect={() => handleSelect('period', period)}>
      {period}
    </DropdownMenuCheckboxItem>
  ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
              <CardContent>
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-8"
            placeholder="Search subscriptions..."
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Table className="mt-4 w-full">
          <TableHeader>
          <TableRow>
                      <TableHead className="w-[80px] cursor-pointer">SNO</TableHead>
                      <TableHead className="max-w-[150px] cursor-pointer">Name</TableHead>
                      <TableHead className="cursor-pointer">Amount</TableHead>
                      <TableHead className="cursor-pointer">Expiry Date</TableHead>
                      <TableHead className="cursor-pointer">Period</TableHead>
                      <TableHead className="cursor-pointer">Payment Type</TableHead>
                      <TableHead />
                    </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubscriptions.map((subscription, index) => (
              <TableRow key={subscription.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">{subscription.name}</TableCell>
                <TableCell>{subscription.cost} {subscription.currency}</TableCell>
                <TableCell>{subscription.date}</TableCell>
                <TableCell>{subscription.period}</TableCell>
                <TableCell>{subscription['paymentType']}</TableCell>
                <TableCell className="hidden md:table-cell">
               
                        <Button size="icon" variant="outline">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                     
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
            </Card>
            <Card>
          <CardContent>
          <Upcomningtracker/>
          <RadialBarChart2 data={data} />
          

        </CardContent>
        </Card>
          </div>
        </div>
      </main>}
      
    </div>
  )
}

function Upcomningtracker(){
  return(
    <div className="flex flex-col ">
      <div className="flex flex-row items-center ml-[5px] mt-[10px] md:ml-3 md:mt-8 md:mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="3" fill="#242424" className="animate-pulse" />
                    <circle cx="7" cy="7" r="6.5" stroke="#242424" className="animate-pulse" />
                    <circle cx="7" cy="7" r="4.5" stroke="#242424" />
                </svg>
                <h2 className="mx-2">Upcoming Charges:</h2>
            </div>

            <div>

            <div className="flex flex-col space-y-4 overflow-y-auto scrollbar-hidden p-4">
      <div className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800">
        <h3 className="font-semibold">Netflix</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">in 1 day</p>
      </div>
      <div className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800">
        <h3 className="font-semibold">Apple Music</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">in 1 day</p>
      </div>
      <div className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800">
        <h3 className="font-semibold">Disney+</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">in 2 days</p>
      </div>
    </div>
            </div>

    </div>
  )
}

function calculateUpcomingPayments(data) {
  const today = new Date('2024-02-02');

  const getDaysUntilNextPayment = (nextPayment, period) => {
      let nextPaymentDate = new Date(nextPayment);
      const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
      while (nextPaymentDate <= today) {
          if (period === 'daily') {
              nextPaymentDate = new Date(nextPaymentDate.getTime() + oneDay);
          } else if (period === 'weekly') {
              nextPaymentDate = new Date(nextPaymentDate.getTime() + 7 * oneDay);
          } else if (period === 'monthly') {
              nextPaymentDate = new Date(nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1));
          } else if (period === 'annually') {
              nextPaymentDate = new Date(nextPaymentDate.setFullYear(nextPaymentDate.getFullYear() + 1));
          }
      }
      return Math.round((nextPaymentDate - today) / oneDay);
  };

  const validSubscriptions = data.subscriptions.filter(sub => sub.valid && sub.nextPayment.toLowerCase() !== 'no');
  const upcomingPayments = validSubscriptions.map(sub => ({
      name: sub.name,
      daysUntilNextPayment: getDaysUntilNextPayment(sub.nextPayment, sub.period),
  }));

  
  upcomingPayments.sort((a, b) => a.daysUntilNextPayment - b.daysUntilNextPayment);


  const fourUpcomingPayments = upcomingPayments.slice(0, 4);

  return fourUpcomingPayments.map(sub => `${sub.name} in ${sub.daysUntilNextPayment} days`);
}


console.log(calculateUpcomingPayments(data));

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}




function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}



function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}




function Settings(){
  return(

    <p>Setings tab</p>
  )
}

import {runai} from "@/lib/gen"


function Analyze(){
  const [subscriptionStats, setSubscriptionStats] = useState({
    totalCost: 0,
    numberOfSubscriptions: 0,
    recurringSubscriptions: 0,
    upcomingSubscriptions: 0,
});

const [geminitells, setgeminitells] = useState("")

useEffect(() => {

    calculateSubscriptionStats(data);
    let a = runai(data)
    setgeminitells(a)
}, []);


const calculateSubscriptionStats = (data) => {
    let totalCost = 0;
    let recurringSubscriptions = 0;
    let upcomingSubscriptions = 0;

    data.subscriptions.forEach(sub => {
        if (sub.valid) {
            totalCost += parseInt(sub.cost);
            if (sub.type === "Recurring") {
                recurringSubscriptions += 1;
            }
            if (sub.nextPayment.toLowerCase() !== 'no') {
                upcomingSubscriptions += 1;
            }
        }
    });

    setSubscriptionStats({
        totalCost,
        numberOfSubscriptions: data.subscriptions.length,
        recurringSubscriptions,
        upcomingSubscriptions,
    });
};


  return (

    <div className="flex flex-col w-full h-full">
    <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold">Dashboard</h2>
    </header>
    <main className="flex-1 overflow-y-auto p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
            <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscriptionStats.totalCost}</div>
           
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscriptionStats.numberOfSubscriptions}</div>
           
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Recoring Amount</CardTitle>
            <CreditCardIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscriptionStats.recurringSubscriptions}</div>
            
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Upcoming Payments</CardTitle>
            <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscriptionStats.upcomingSubscriptions}</div>
           
          </CardContent>
        </Card>
      </div>
      <Card className="mt-3 px-3 pt-4">
      <CardContent className="mt-3 px-3">
      <div>
      <BsRobot className="w-9 h-auto mr-2" />
      <p className="">
        
{geminitells}
      </p></div> </CardContent></Card>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <CostBarChartmain data={data} className="w-full aspect-[4/3]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Cost projection</CardTitle>
          </CardHeader>
          <CardContent>
          <MyprojBar dat={data} className="w-full aspect-[4/3]" />
        </CardContent>
        </Card>
        <Card>
          <CardContent>
          <SankeyChart data={data}/>
        </CardContent>
        </Card>
        <Card>
          <CardContent>
          <RadialBarChart2 data={data} />
        </CardContent>
        </Card>
        
      </div>
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>$250.00</TableCell>
                  <TableCell className="text-right">Credit Card</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV002</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>$150.00</TableCell>
                  <TableCell className="text-right">PayPal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV003</TableCell>
                  <TableCell>Unpaid</TableCell>
                  <TableCell>$350.00</TableCell>
                  <TableCell className="text-right">Bank Transfer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
  )
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}




function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}




function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function PaymentChart() {


  const paymentTypes = {};
  data.subscriptions.forEach(sub => {
      if (paymentTypes[sub.paymentType]) {
          paymentTypes[sub.paymentType] += parseFloat(sub.cost);
      } else {
          paymentTypes[sub.paymentType] = parseFloat(sub.cost);
      }
  });
  
  const chartData = Object.keys(paymentTypes).map(key => ({
      id: key,
      label: key,
      value: paymentTypes[key],
  }));

  return (
      <div style={{ height: 400,width:400 }}>
          <ResponsivePie
              data={chartData}
              margin={{ top: 40, right: 80, bottom: 20, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
          />
      </div>
  )
}

const RadialBarChart2 = ({ data }) => {
  // Process data to aggregate cost by paymentType
  const paymentTypeTotals = data.subscriptions.reduce((acc, sub) => {
    const paymentType = sub.paymentType;
    const cost = parseInt(sub.cost, 10);
    if (acc[paymentType]) {
      acc[paymentType] += cost;
    } else {
      acc[paymentType] = cost;
    }
    return acc;
  }, {});

  // Transform aggregated data into the format expected by Nivo RadialBar
  const chartData = Object.entries(paymentTypeTotals).map(([key, value]) => ({
    id: key,
    data: [{ x: key, y: value }],
  }));

  return (
    <div className="h-[400px] p-4 my-4 w-[400px]" >
      <ResponsiveRadialBar
        data={chartData}
        keys={['y']}
        indexBy="x"
        maxValue="auto"
        innerRadius={0.5}
        padding={0.2}
        valueFormat=">-.2f"
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0, legend: 'payment type', legendOffset: 12 }}
      />
    </div>
  );
};

import { ResponsiveBar } from '@nivo/bar';

const CostBarChartmain = ({ data }) => {
  const chartData = data.subscriptions.map(sub => ({
    "Subscription": sub.name,
    "Cost": parseInt(sub.cost, 10),
  }));

  return (
    <div style={{ height: 400 }}>
      <ResponsiveBar
        data={chartData}
        keys={['Cost']}
        indexBy="Subscription"
        margin={{ top: 50, right: 130, bottom: 120, left: 60 }} // Increased bottom margin to accommodate vertical labels
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90, // Rotate ticks for vertical alignment
          legend: 'Subscription',
          legendPosition: 'middle',
          legendOffset: 80 // Adjusted for better spacing between labels and legend
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Cost',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};


import { ResponsiveSankey } from '@nivo/sankey';

const SankeyChart = ({ data }) => {
 
  const { subscriptions } = data;

  const nodes = [];
  const links = [];

  const categories = [...new Set(subscriptions.map(sub => sub.category))];
  const paymentTypes = [...new Set(subscriptions.map(sub => sub.paymentType))];

  categories.forEach((category, index) => {
    nodes.push({ id: category, color: "hsl(5, 70%, 50%)" });
  });

  paymentTypes.forEach((type, index) => {
    nodes.push({ id: type, color: "hsl(100, 70%, 50%)" });
  });

  subscriptions.forEach(sub => {
    if (sub.valid) {
      links.push({
        source: sub.paymentType,
        target: sub.category,
        value: parseInt(sub.cost, 10)
      });
    }
  });

  const sankeyData = { nodes, links };

  return (
    <div className="w-[600px] h-[400px]" >
      <ResponsiveSankey
        data={sankeyData}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align="justify"
        colors={{ scheme: 'category10' }}
        nodeOpacity={1}
        nodeThickness={18}
        nodeInnerPadding={3}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="vertical"
        labelPadding={16}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={13}
      />
    </div>
  );
};



import { DateTime } from 'luxon';


const  MyprojBar = () => {

    
    const currentMonthTotal = 1928.57; 
   



let summ = prevMonthsTotals.reduce((partialSum, prevMonthsTotals) => partialSum + prevMonthsTotals, 0) + currentMonthTotal

const nextMonthPrediction = summ/5

const dataTotals = [...prevMonthsTotals, currentMonthTotal, nextMonthPrediction];


   
    const getMonthNames = (totals) => {
        let monthNames = [];
        const now = DateTime.now();
        for (let i = totals.length - 2; i >= 0; i--) { 
            const month = now.minus({ months: i }).toFormat('MMMM');
            monthNames.unshift(month);
        }
        monthNames.push('Next Month'); 
        return monthNames;
    };

    const monthNames = getMonthNames(dataTotals);

   
    const data = [
        {
            id: "Total Money",
            data: monthNames.map((month, index) => ({
                x: month,
                y: dataTotals[index]
            }))
        }
    ];

    return (
      <div className="w-full h-[350px]">
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Month',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Total Money (INR)',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
        </div>
    );
};
