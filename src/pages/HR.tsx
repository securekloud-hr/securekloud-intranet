import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Full employee directory data from the provided Excel file
const employeeDirectory = [
{
"EmpID": "A0907",
"EmployeeName": "Jayakumar Karuppasamy",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9840299324",
"Email": "jayakumar.pvk@gmail.com",
"CurrentAddress": "2/247, 2nd Cross Street, Srinivasan Salai, Nanmangalam, 600129",
"PermanentAddress": "2/247, 2nd Cross Street, Srinivasan Salai, Nanmangalam, 600129",
"PAN": "AGVPJ9237F",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B1311",
"EmployeeName": "Vishnu Mohan",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9710199742",
"Email": "dvmjai@gmail.com",
"CurrentAddress": "No-12,Ganapathy street,Shenoy Nagar,Chennai-600030.",
"PermanentAddress": "No-12,Ganapathy street,Shenoy Nagar,Chennai-600030.",
"PAN": "ASZPV4400G",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B1537",
"EmployeeName": "Abirami Ravi",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9994611137",
"Email": "abiramiravi187@gmail.com",
"CurrentAddress": "No 251/2(TNHB FLATS), BLOCK NO 3 FLAT NO 10, PADI KUPPAM MAIN ROAD, PADI KUPPAM, MUGAPPAIR EAST",
"PermanentAddress": "No 251/2(TNHB FLATS), BLOCK NO 3 FLAT NO 10, PADI",
"PAN": "BINPA7610L",
"Aadhar": "To Get",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B1564",
"EmployeeName": "Subash Chandra Bose",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9600822654",
"Email": "sksubash77@gmail.com",
"CurrentAddress": "No1,B Unnathi Lake View Flats, First Main Road, Arunodhyam Nagar, Nanmangalam, Chennai - 600117",
"PermanentAddress": "No1,B Unnathi Lake View Flats, First Main Road, Arunodhyam Nagar, Nanmangalam, Chennai - 600117",
"PAN": "DPVPS3237G",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B1584",
"EmployeeName": "Sebabrata Ghosh",
"Dept": "B.D.A.",
"Domain": "G.C.P.",
"Certifications": "Deep Learning Specialization, Google Cloud Certified Professional Cloud Database Engineer, Professional Machine Learning Engineer, Google Cloud Certified - Associate Cloud Engineer, Google Cloud Certified - Professional Data Engineer, Google Cloud Certified Professional - Cloud Architect",
"PhoneNumber": "9962620635",
"Email": "sebabratar@8kmiles.com",
"CurrentAddress": "Vill+P.O-Asanpur, Dist-Burdwan, Pin-713145",
"PermanentAddress": "Vill+P.O-Asanpur, Dist-Burdwan, Pin-713145",
"PAN": "BEOPG6982A",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B1611",
"EmployeeName": "Sakthidasan E",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9840405446",
"Email": "sakthiking@gmail.com",
"CurrentAddress": "No: 4/437, First Main Road, P.T.C Quarters, Thuraipakkam, Chennai - 600097",
"PermanentAddress": "No: 4/437, First Main Road, P.T.C Quarters, Thuraipakkam, Chennai - 600097",
"PAN": "BYPPS6090A",
"Aadhar": "To Get",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B1656",
"EmployeeName": "Thumu Muni Venkata Surya",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9494643952",
"Email": "surya.ithr@gmail.com",
"CurrentAddress": "H.No : 25/2/1787, Podalakour Road, Pragathi Ngar, 7th-Street B-Block, Nellore Andhra Pradesh",
"PermanentAddress": "H.No : 25/2/1787, Podalakour Road, Pragathi Ngar, 7th-Street B-Block, Nellore Andhra Pradesh",
"PAN": "ALTPT6591R",
"Aadhar": "To Get",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B1702",
"EmployeeName": "Sriram Seshadri",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9500024077",
"Email": "contact.sri24@gmail.com",
"CurrentAddress": "FLAT 'D', 20/49 SUBRAMANIAM STREET, ABHIRAMAPURAM, CHENNAI 600018",
"PermanentAddress": "FLAT 'D', 20/49 SUBRAMANIAM STREET, ABHIRAMAPURAM, CHENNAI 600018",
"PAN": "ANJPS2620J",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B1705",
"EmployeeName": "Pradeep V",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9160790906",
"Email": "pradeep.stmr@gmail.com",
"CurrentAddress": "To get",
"PermanentAddress": "To get",
"PAN": "ATXPV0015A",
"Aadhar": "To Get",
"BloodGroup": "To get"
},
{
"EmpID": "B1803",
"EmployeeName": "Mohana Balasubramaniam",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9841151232",
"Email": "mohana1409@gmail.com",
"CurrentAddress": "No: 5/2, 1st floor, Pammal nallathambi street, Mathiazhan nagar, Saligramam, Chennai- 600093.",
"PermanentAddress": "No: 5/2, 1st floor, Pammal nallathambi street, Mathiazhan nagar, Saligramam, Chennai- 600093.",
"PAN": "BORPM2583N",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B1857",
"EmployeeName": "Chejerla Subrahmanyam",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9805249441",
"Email": "subrahmanyam720@gmail.com",
"CurrentAddress": "Chilamanuru(Vi and Po),Balayapalli(Mandal),S.P.S.R Nellore(Dist), AndhraPradesh",
"PermanentAddress": "Chilamanuru(Vi and Po),Balayapalli(Mandal),S.P.S.R Nellore(Dist), AndhraPradesh",
"PAN": "AUZPC4871C",
"Aadhar": "To Get",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B1873",
"EmployeeName": "Hariwasa S",
"Dept": "C.M.S.",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "8098122794",
"Email": "harivaas5@gmail.com",
"CurrentAddress": "No: 536, Vaikkam Periyar Nagar, Avaniyapuram, Madurai-625012",
"PermanentAddress": "No: 536, Vaikkam Periyar Nagar, Avaniyapuram, Madurai-625012",
"PAN": "AKOPH8079E",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B1874",
"EmployeeName": "Agathees Kumar",
"Dept": "Cloud Ez",
"Domain": "Kubernetes",
"Certifications": "Certified Kubernetes Administrator, Certified Kubernetes Security Specialist",
"PhoneNumber": "8072282461",
"Email": "d.agatheeskumar@gmail.com",
"CurrentAddress": "5/47, South Street, Pallangkinaru, Sathankulam, Tuticorin-628701",
"PermanentAddress": "5/47, South Street, Pallangkinaru, Sathankulam, Tuticorin-628701",
"PAN": "BKGP2031N",
"Aadhar": "To Get",
"BloodGroup": "A+Ve"
},
{
"EmpID": "B1890",
"EmployeeName": "Veeresh M",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "7868035073",
"Email": "veereshmano@gmail.com",
"CurrentAddress": "No.73, Mela Street, Soorapallam, Pattukkottai, Thanjavur - 614601",
"PermanentAddress": "No.73, Mela Street, Soorapallam, Pattukkottai, Thanjavur - 614601",
"PAN": "AXTPV6797M",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B1923",
"EmployeeName": "Swathy R",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8870743453",
"Email": "swathyram2002@gmail.com",
"CurrentAddress": "No: 2/252, 2nd block, Agathiyar 1st street, Mogappair east, Chennai- 600037",
"PermanentAddress": "No: 2/252, 2nd block, Agathiyar 1st street, Mogappair east, Chennai- 600037",
"PAN": "FRCPS0258G",
"Aadhar": "To Get",
"BloodGroup": "B-Ve"
},
{
"EmpID": "B1941",
"EmployeeName": "Joshva Nathan M",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "7299739150",
"Email": "joshva0894@gmail.com",
"CurrentAddress": "To get",
"PermanentAddress": "To get",
"PAN": "AUUPJ2405J",
"Aadhar": "To Get",
"BloodGroup": "To get"
},
{
"EmpID": "B1953",
"EmployeeName": "Harithasri S",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8754425676",
"Email": "harithasriselva@gmail.com",
"CurrentAddress": "PLOT NO:73, DOOR NO:5, MUTHU ILLAM, PRIYA NAGAR FIRST STREET, URAPAKKAM, CHENGALPATTU DISTRICT-603210",
"PermanentAddress": "PLOT NO:73, DOOR NO:5, MUTHU ILLAM, PRIYA NAGAR FIRST STREET, URAPAKKAM, CHENGALPATTU DISTRICT-603210",
"PAN": "APQPH8253R",
"Aadhar": "To Get",
"BloodGroup": "A1B+Ve"
},
{
"EmpID": "B1971",
"EmployeeName": "Velayutham G",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9500173001",
"Email": "gvela.chennai@gmail.com",
"CurrentAddress": "L-348, Ground Floor, 14th Cross Street, Thiruvalluvar Nagar, Thiruvanmiyur, Chennai - 600041",
"PermanentAddress": "L-348, Ground Floor, 14th Cross Street, Thiruvalluvar Nagar, Thiruvanmiyur, Chennai - 600041",
"PAN": "AIEPV2399H",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B1981",
"EmployeeName": "Pamulapati Kishore",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8886828211",
"Email": "pvkishorechowdhary@outlook.com",
"CurrentAddress": "Flat No: 302, Parthika Enclave, 1st B main, Coconut garden layout, Ayyappa Nagar, Krishnarajapura, Bengaluru, Karnataka 560036",
"PermanentAddress": "Flat No: 302, Parthika Enclave, 1st B main, Coconut garden layout, Ayyappa Nagar, Krishnarajapura, Bengaluru, Karnataka 560036",
"PAN": "CSUPP3547B",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B20004",
"EmployeeName": "Ananth P",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8870190189",
"Email": "likeanand05@hotmail.com",
"CurrentAddress": "14/9A, ASARI STREET, UPPILIAPURAM, THURAIYUR (T.K), TRICHY, TAMILNADU. PIN-621011",
"PermanentAddress": "14/9A, ASARI STREET, UPPILIAPURAM, THURAIYUR (T.K), TRICHY, TAMILNADU. PIN-621011",
"PAN": "AXZPA9154D",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B20012",
"EmployeeName": "Hemamalini K",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9840355465",
"Email": "hema_litt@yahoo.co.in",
"CurrentAddress": "D212, Radiance Mercury Apartments, Gandhi Nagar Soceity, Triplicane, Chennai 600100",
"PermanentAddress": "D212, Radiance Mercury Apartments, Gandhi Nagar Soceity, Triplicane, Chennai 600100",
"PAN": "ACTPH1760M",
"Aadhar": "To Get",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B20058",
"EmployeeName": "Murali Krishnan R",
"Dept": "Admin.",
"Domain": "I.S.O.",
"Certifications": "ISO27001: 2013 & ISMS Lead auditor, AWS Certified Solutions Architect - Associate",
"PhoneNumber": "9840057563",
"Email": "murali.krishnan1982@gmail.com",
"CurrentAddress": "Tejasri Apartments, Flat F, Viswathapuram Khadarthottam, Nanganallur, Chennai - 61",
"PermanentAddress": "Tejasri Apartments, Flat F, Viswathapuram Khadarthottam, Nanganallur, Chennai - 61",
"PAN": "ANRPM9823B",
"Aadhar": "828544643690",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B20063",
"EmployeeName": "Ramesh Ram",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8668187307",
"Email": "rameshrampr@gmail.com",
"CurrentAddress": "17, Lakshmi Mills Colony, Pappanaicken Palayam, Coimbatore 641037",
"PermanentAddress": "17, Lakshmi Mills Colony, Pappanaicken Palayam, Coimbatore 641037",
"PAN": "BHRPR3269K",
"Aadhar": "636860527915",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B20075",
"EmployeeName": "Cynthia V",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9841550407",
"Email": "cynthia.aravind@gmail.com",
"CurrentAddress": "No: 14, Ambika Nagar Main Road, Madambakkam, Chennai 600126",
"PermanentAddress": "No: 14, Ambika Nagar Main Road, Madambakkam, Chennai 600126",
"PAN": "ARIPC9260B",
"Aadhar": "745188515426",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B20111",
"EmployeeName": "Sivakumar Natarajan",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9940103400",
"Email": "Siva.x.kumar@gmail.com",
"CurrentAddress": "87D Regal Palm Gardens, Velachery, Chennai 600042",
"PermanentAddress": "87D Regal Palm Gardens, Velachery, Chennai 600042",
"PAN": "BLDPS9596J",
"Aadhar": "368130470663",
"BloodGroup": "AB+Ve"
},
{
"EmpID": "B20115",
"EmployeeName": "Manikandan Srinivasan",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8608564636",
"Email": "manikandan150295@gmail.com",
"CurrentAddress": "No 922, T H Road, Old Washermenpet, Chennai - 600021",
"PermanentAddress": "No 922, T H Road, Old Washermenpet, Chennai - 600021",
"PAN": "EGMPM0893R",
"Aadhar": "479494387559",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B20123",
"EmployeeName": "Manikandan V",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8668066199",
"Email": "manikandaboobathraja@gmail.com",
"CurrentAddress": "5/334-Near SKR Shop,Okkiyampet Bus-stop,Chennai-6000097",
"PermanentAddress": "5/334-Near SKR Shop,Okkiyampet Bus-stop,Chennai-6000097",
"PAN": "CGDPM7939M",
"Aadhar": "470062334761",
"BloodGroup": "B+Ve"
},
{
"EmpID": "D0001",
"EmployeeName": "Selvaraj",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "N.A.",
"Email": "",
"CurrentAddress": "No:4/145 Annai Sathiya salai, MGR Nagar, Rajivgandhi salai, Kottivakkam,Ch-600041",
"PermanentAddress": "No:4/145 Annai Sathiya salai, MGR Nagar, Rajivgandhi salai, Kottivakkam,Ch-600041",
"PAN": "GAMPS2690E",
"Aadhar": "To Get",
"BloodGroup": "O+Ve"
},
{
"EmpID": "D0003",
"EmployeeName": "Senthil",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9790270100",
"Email": "",
"CurrentAddress": "No-12/12 Big street, Semmedu, Villupuram ,Gingee-604153",
"PermanentAddress": "No-12/12 Big street, Semmedu, Villupuram ,Gingee-604153",
"PAN": "EABPR2094L",
"Aadhar": "507464448831",
"BloodGroup": "O+Ve"
},
{
"EmpID": "H0001",
"EmployeeName": "Valarmathy",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "N.A.",
"Email": "",
"CurrentAddress": "No-40/14,Raghavan colony 4th cross street, Jafferkhanpet, Ashok Nagar,Chennai-600083",
"PermanentAddress": "No-40/14,Raghavan colony 4th cross street, Jafferkhanpet, Ashok Nagar,Chennai-600083",
"PAN": "CAFPV1288N",
"Aadhar": "684969143868",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B21017",
"EmployeeName": "Chandrakanth S",
"Dept": "B.D.A.",
"Domain": "Scrum",
"Certifications": "Scrum Master",
"PhoneNumber": "8105945066",
"Email": "chandru173898@yahoo.co.in",
"CurrentAddress": "#62, Lingabhairavi Kudil, Seevagasinthamani St., Sentamil Nagar, Karuppayurani, Madurai - 625020",
"PermanentAddress": "#62, Lingabhairavi Kudil, Seevagasinthamani St., Sentamil Nagar, Karuppayurani, Madurai - 625020",
"PAN": "ANBPC1683K",
"Aadhar": "897059917863",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B21021",
"EmployeeName": "Jayasree R",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8248346063",
"Email": "jayasreer534@gmail.com",
"CurrentAddress": "Bangalore",
"PermanentAddress": "Bangalore",
"PAN": "AJMPJ6560F",
"Aadhar": "270297335513",
"BloodGroup": "AB+Ve"
},
{
"EmpID": "B21024",
"EmployeeName": "Sweetha B",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9789967241",
"Email": "sweetha.baskaran@securekloud.com",
"CurrentAddress": "No. 4DC, Sai kirupa flats, Kovur, Chennai - 600128",
"PermanentAddress": "No. 4DC, Sai kirupa flats, Kovur, Chennai - 600128",
"PAN": "EIAPS9071P",
"Aadhar": "520231709639",
"BloodGroup": "A+Ve"
},
{
"EmpID": "B21025",
"EmployeeName": "Shanmugavel S",
"Dept": "B.D.A.",
"Domain": "A.W.S.",
"Certifications": "Azure Fundamentals, AWS Cloud Practitioner, AWS Certified Solution Architect Associate, AWS Certified Security - Specialty, Certified Kubernetes Application Developer, AWS Certified Developer- Associate",
"PhoneNumber": "8122336589",
"Email": "Shanmugavel281996@gmail.com",
"CurrentAddress": "2/10, Nadu street, Kondamanaickenpatty, Namakkal 637405",
"PermanentAddress": "2/10, Nadu street, Kondamanaickenpatty, Namakkal 637405",
"PAN": "IPBPS6882C",
"Aadhar": "654464659035",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B21029",
"EmployeeName": "Ramesh Sampath S",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9791110541",
"Email": "ramesh_geetha@yahoo.com",
"CurrentAddress": "59/29-1, TP Koil I lane, Sri Vari, Triplicane, Chennai 600005",
"PermanentAddress": "59/29-1, TP Koil I lane, Sri Vari, Triplicane, Chennai 600005",
"PAN": "AWAPR2257E",
"Aadhar": "419134873353",
"BloodGroup": "A1+Ve"
},
{
"EmpID": "B21064",
"EmployeeName": "Praghatiesh S",
"Dept": "Cloud Ez",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "9715191466",
"Email": "praghatieshss@gmail.com",
"CurrentAddress": "No: 81, Umar Street, P.konthagai, Thittachery, Nagapattinam-DT, Tamilnadu-609703",
"PermanentAddress": "No: 81, Umar Street, P.konthagai, Thittachery, Nagapattinam-DT, Tamilnadu-609703",
"PAN": "NYZPS6756P",
"Aadhar": "345594226168",
"BloodGroup": "A1+Ve"
},
{
"EmpID": "B21066",
"EmployeeName": "Selva Kumar T",
"Dept": "Cloud Ez",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "9344614223",
"Email": "selva1712098@gmail.com",
"CurrentAddress": "21,VADAKATHI AMMAN KOVIL 2ND STREET,ILANJI-627805,TENKASI DISTRICT.",
"PermanentAddress": "21,VADAKATHI AMMAN KOVIL 2ND STREET,ILANJI-627805,TENKASI DISTRICT.",
"PAN": "JCJPS9638N",
"Aadhar": "534471274967",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B21075",
"EmployeeName": "Jegan R",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "7675056549",
"Email": "jeganrethinapandian@gmail.com",
"CurrentAddress": "8/344, East Street, Chettikulam, Tirunelveli, Tamil Nadu - 627120",
"PermanentAddress": "8/344, East Street, Chettikulam, Tirunelveli, Tamil Nadu - 627120",
"PAN": "AVPPJ3399H",
"Aadhar": "461078449989",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B21076",
"EmployeeName": "Veerendra Kumar Meka R",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9059285399",
"Email": "veerendra.meka79@gmail.com",
"CurrentAddress": "D.No: 5-172, Balusuvari Street, Srinagar, Pulugurtha Village, Anaparthi Mandal, East Godavari Dist, Andhra Pradesh-533261",
"PermanentAddress": "D.No: 5-172, Balusuvari Street, Srinagar, Pulugurtha Village, Anaparthi Mandal, East Godavari Dist, Andhra Pradesh-533261",
"PAN": "CFHPM3951A",
"Aadhar": "428772746743",
"BloodGroup": "AB+Ve"
},
{
"EmpID": "B21077",
"EmployeeName": "Karthick Gajapathy J",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "994094470_compute",
"Email": "karthick_gajapathy@outlook.com",
"CurrentAddress": "skycity appartments tower 15 door no 203 vanagaram Chennai 600095",
"PermanentAddress": "skycity appartments tower 15 door no 203 vanagaram Chennai 600095",
"PAN": "DORPK6775L",
"Aadhar": "712929186013",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B21080",
"EmployeeName": "Ooviyalakshmi K",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9342366082",
"Email": "ooviyalakshmi12@gmail.com",
"CurrentAddress": "381,Gnanajothi Nagar, c.kothangudi ,Chidambaram 608001",
"PermanentAddress": "381,Gnanajothi Nagar, c.kothangudi ,Chidambaram 608001",
"PAN": "ABNPO6153C",
"Aadhar": "979929702880",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B21101",
"EmployeeName": "Venkata Siva Reddy M",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9550826942",
"Email": "sivareddymeraki@gmail.com",
"CurrentAddress": "3-427, Ahsanam street, vempalli road, Yerraguntla, Y.S.R KADAPA Dist, zip code 516309",
"PermanentAddress": "3-427, Ahsanam street, vempalli road, Yerraguntla, Y.S.R KADAPA Dist, zip code 516309",
"PAN": "BUCPR6579L",
"Aadhar": "911963551675",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B21104",
"EmployeeName": "Sruthi S",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "7010639532",
"Email": "sruthisankar178@gmail.com",
"CurrentAddress": "F5, Atulya Apartments, Gandhi Street, Keelkattalai, Chennai -600117",
"PermanentAddress": "F5, Atulya Apartments, Gandhi Street, Keelkattalai, Chennai -600117",
"PAN": "GUVPS8613G",
"Aadhar": "380447421403",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B21110",
"EmployeeName": "Vipul Vohra",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9463410530",
"Email": "vipul.vohra7@gmail.com",
"CurrentAddress": "#H-348, Phase-1, Mohali (Punjab), 160055",
"PermanentAddress": "#H-348, Phase-1, Mohali (Punjab), 160055",
"PAN": "AKHPV4587E",
"Aadhar": "226124193902",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B21119",
"EmployeeName": "Vijay Kumar M",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8977123478",
"Email": "muramreddy.vijay01@gmail.com",
"CurrentAddress": "Muthukuru(V), Kothapalli (P), Anantha Sagaram (M), SPSR Nellore (Dt).",
"PermanentAddress": "Muthukuru(V), Kothapalli (P), Anantha Sagaram (M), SPSR Nellore (Dt).",
"PAN": "EYZPM8082D",
"Aadhar": "890157059193",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B21150",
"EmployeeName": "Kishore Kumar S",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9789830470",
"Email": "imkishoreshankar@gmail.com",
"CurrentAddress": "831,9th street, 4th cross, s a colony, vyasarpadi, Chennai-600039",
"PermanentAddress": "831,9th street, 4th cross, s a colony, vyasarpadi, Chennai-600039",
"PAN": "EVHPK2530K",
"Aadhar": "582147369251",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B21153",
"EmployeeName": "Abubakkar Siddik N",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8838985690",
"Email": "abusiddikn@outlook.com",
"CurrentAddress": "No 48, MR Mill 2nd street, South Ukkadai Ariyamangalam, Trichy - 620010",
"PermanentAddress": "No 48, MR Mill 2nd street, South Ukkadai Ariyamangalam, Trichy - 620010",
"PAN": "CKMPA1209F",
"Aadhar": "648291368238",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B21155",
"EmployeeName": "Nethaji S",
"Dept": "C.M.S.",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "8870743572",
"Email": "nethaji1810@gmail.com",
"CurrentAddress": "591, REDDIYAPALYAM (PO) ,THANDRAMPATU (TK), TIRUVANNAMALAI(DT) 606708",
"PermanentAddress": "591, REDDIYAPALYAM (PO) ,THANDRAMPATU (TK), TIRUVANNAMALAI(DT) 606708",
"PAN": "AXZPN4631Q",
"Aadhar": "579808782422",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B21167",
"EmployeeName": "Prasad N",
"Dept": "C.M.S.",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "9390398998",
"Email": "prasadn6966@gmail.com",
"CurrentAddress": "4/17 Pathasykamvari palli, Madhavaram(v),Rayachoti(M),Kadapa(Dist),Andhra Pradesh-516269",
"PermanentAddress": "4/17 Pathasykamvari palli, Madhavaram(v),Rayachoti(M),Kadapa(Dist),Andhra Pradesh-516269",
"PAN": "DZAPP1391F",
"Aadhar": "792515352216",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B21169",
"EmployeeName": "Anand J",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9566221473",
"Email": "anandvjp@gmail.com",
"CurrentAddress": "Block 2 Flat 2310 Mambakkam, Chennai,600127",
"PermanentAddress": "Block 2 Flat 2310 Mambakkam, Chennai,600127",
"PAN": "ASDPA7750N",
"Aadhar": "206113883674",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B22029",
"EmployeeName": "Ezhilarasi S",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8610841056",
"Email": "anithasekar1993@gmail.com",
"CurrentAddress": "14A, balaji avenue-II,Neelamangalam,Guduvanchery-603202",
"PermanentAddress": "14A, balaji avenue-II,Neelamangalam,Guduvanchery-603202",
"PAN": "ADTPE2229D",
"Aadhar": "349260641808",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22031",
"EmployeeName": "Abhinav Sutradhar",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "7387006711",
"Email": "abhinav.sutradhar@gmail.com",
"CurrentAddress": "2E, Himmat Tower, Gokul Housing Society, Borgaon, Nagpur, 440013, Maharashtra",
"PermanentAddress": "2E, Himmat Tower, Gokul Housing Society, Borgaon, Nagpur, 440013, Maharashtra",
"PAN": "GQYPS1410J",
"Aadhar": "333927121540",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22040",
"EmployeeName": "Nachiyar C",
"Dept": "B.D.A.",
"Domain": "G.C.P.",
"Certifications": "Google Cloud Certified - Cloud Digital Leader",
"PhoneNumber": "7904083032",
"Email": "nachiyar27@gmail.com",
"CurrentAddress": "63, Perumal Sannathi Street, Veeraraghavapuram, Tirunelveli, Junction - 627001",
"PermanentAddress": "63, Perumal Sannathi Street, Veeraraghavapuram, Tirunelveli, Junction - 627001",
"PAN": "ASNPN8637M",
"Aadhar": "511259491268",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B22048",
"EmployeeName": "Saravana Kumar D",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8220056524",
"Email": "developer.skiy9798@gmail.com",
"CurrentAddress": "NO 27, THERPILLAIYAR KOVIL STREET, NEAR ST PAULS ELEMENTARY SCHOOL, KK NAGAR, VILLUPURAM 605602",
"PermanentAddress": "NO 27, THERPILLAIYAR KOVIL STREET, NEAR ST PAULS ELEMENTARY SCHOOL, KK NAGAR, VILLUPURAM 605602",
"PAN": "MHCPS0784A",
"Aadhar": "905236534152",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B22050",
"EmployeeName": "Manivannan K",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9629083852",
"Email": "manikannan610@gmail.com",
"CurrentAddress": "71, first street, sengunthapuram, jayankondam, ariyalur - 621802",
"PermanentAddress": "71, first street, sengunthapuram, jayankondam, ariyalur - 621802",
"PAN": "DXBPM8293Q",
"Aadhar": "960837604365",
"BloodGroup": "AB+Ve"
},
{
"EmpID": "B22055",
"EmployeeName": "Sinthya Alex A",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "7598949863",
"Email": "ammusinthya21@gmail.com",
"CurrentAddress": "No.10A, Govindhaswamy Street, Pillaiyar Kovil main street, Near Ganaphathy Steels, Jafferkhanpet, Chennai-83",
"PermanentAddress": "No.10A, Govindhaswamy Street, Pillaiyar Kovil main street, Near Ganaphathy Steels, Jafferkhanpet, Chennai-83",
"PAN": "EESPS8950D",
"Aadhar": "731320410695",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B22058",
"EmployeeName": "Karthikeyan V",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9384634297",
"Email": "karthikeyan.vel17@gmail.com",
"CurrentAddress": "No 168 sri valli nagar nandhivaram guduvancheri 603202",
"PermanentAddress": "No 168 sri valli nagar nandhivaram guduvancheri 603202",
"PAN": "BYTPV0483L",
"Aadhar": "987430746635",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22081",
"EmployeeName": "Devendran Rajesh K",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9944848558",
"Email": "devendranrajesh@gmail.com",
"CurrentAddress": "38, Vel Niketan apartment, Ground floor, Vellalar street, Kodambakkam, Chennai-600024.",
"PermanentAddress": "38, Vel Niketan apartment, Ground floor, Vellalar street, Kodambakkam, Chennai-600024.",
"PAN": "AVGPD3254J",
"Aadhar": "439384836466",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B22082",
"EmployeeName": "Radhika M",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8838302373",
"Email": "radhikaarchitect06@gmail.com",
"CurrentAddress": "Plot.63, Door no.2, Telephone Nagar 7th cross street, Perungudi, Chennai - 600096.",
"PermanentAddress": "Plot.63, Door no.2, Telephone Nagar 7th cross street, Perungudi, Chennai - 600096.",
"PAN": "DPYPR3828P",
"Aadhar": "632505135029",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22088",
"EmployeeName": "Aravindh S",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "7339640121",
"Email": "suryaaravindh555@gmail.com",
"CurrentAddress": "12/17/2 Madathuvillai,viricode,Marthandam,Kanyakumari",
"PermanentAddress": "12/17/2 Madathuvillai,viricode,Marthandam,Kanyakumari",
"PAN": "KDSPS1475J",
"Aadhar": "264813230120",
"BloodGroup": "A+Ve"
},
{
"EmpID": "B22110",
"EmployeeName": "Hariprasaad G N",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "7904426517",
"Email": "hariprasaadgan@gmail.com",
"CurrentAddress": "C-8, Bracket street, Block-11, Neyveli 607803",
"PermanentAddress": "C-8, Bracket street, Block-11, Neyveli 607803",
"PAN": "AKJPH4107N",
"Aadhar": "848182940381",
"BloodGroup": "A+Ve"
},
{
"EmpID": "B22112",
"EmployeeName": "Gunaselvam E",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "6379320873",
"Email": "selvamgunal8@gmail.com",
"CurrentAddress": "13,NAVANEETHAM STREET,PERIYA PAGANDAI,CUDDALORE. 607112",
"PermanentAddress": "13,NAVANEETHAM STREET,PERIYA PAGANDAI,CUDDALORE. 607112",
"PAN": "CVLPG5306H",
"Aadhar": "992009481852",
"BloodGroup": "AB+Ve"
},
{
"EmpID": "B22115",
"EmployeeName": "Harikishore L",
"Dept": "Blockchain Solutions",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Cloud Practitioner",
"PhoneNumber": "9025343612",
"Email": "harikishore1258@gmail.com",
"CurrentAddress": "12/245, Kannadhasan Salai, Mogappair East, Chennai-37",
"PermanentAddress": "12/245, Kannadhasan Salai, Mogappair East, Chennai-37",
"PAN": "BJPPL1883D",
"Aadhar": "528782167468",
"BloodGroup": "A+Ve"
},
{
"EmpID": "B22117",
"EmployeeName": "Nivashini S",
"Dept": "Cloud Ez",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "8072569107",
"Email": "nivashini.s2001@gmail.com",
"CurrentAddress": "\"3/406N\" lyyappan Nagar, Sullipalayam, Thuduppathi-638057",
"PermanentAddress": "\"3/406N\" lyyappan Nagar, Sullipalayam, Thuduppathi-638057",
"PAN": "CPIPN9332K",
"Aadhar": "270051548260",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B22119",
"EmployeeName": "Lakshmi A",
"Dept": "Cloud Ez",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "9952586046",
"Email": "lakshmsas@gmail.com",
"CurrentAddress": "No:2-2-133, Amman Kovil street, Kattalaikudiyiruppu, Shenkottai - 627813.",
"PermanentAddress": "No:2-2-133, Amman Kovil street, Kattalaikudiyiruppu, Shenkottai - 627813.",
"PAN": "AINPL0055D",
"Aadhar": "371504982167",
"BloodGroup": "A1B+Ve"
},
{
"EmpID": "B22120",
"EmployeeName": "Kishore N L",
"Dept": "Blockchain Solutions",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "6382175209",
"Email": "Kishoreharry2001@gmail.com",
"CurrentAddress": "4/91, Pachudayampalayam, Rasipuram, Namakkal-637406",
"PermanentAddress": "4/91, Pachudayampalayam, Rasipuram, Namakkal-637406",
"PAN": "LIKPK7941K",
"Aadhar": "975243332483",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22124",
"EmployeeName": "Sachidanantham S",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9789051872",
"Email": "sachidanantham.s@gmail.com",
"CurrentAddress": "Plot No - 3, M.S. Garden - Phase 2, Thirumanam Village, Chennai - 600072.",
"PermanentAddress": "Plot No - 3, M.S. Garden - Phase 2, Thirumanam Village, Chennai - 600072.",
"PAN": "BAYPS0089N",
"Aadhar": "380768751818",
"BloodGroup": "A+Ve"
},
{
"EmpID": "B22125",
"EmployeeName": "Saurav Sarkar A",
"Dept": "Blockchain Solutions",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Cloud Practitioner",
"PhoneNumber": "8939828749",
"Email": "sauravsarkar421@gmail.com",
"CurrentAddress": "108, S2, Sakthi Aishwaryam Garden, Banu Nagar, 19th Avenue, Ambattur, Chennai-600053",
"PermanentAddress": "108, S2, Sakthi Aishwaryam Garden, Banu Nagar, 19th Avenue, Ambattur, Chennai-600053",
"PAN": "LXLPS1036H",
"Aadhar": "721378968852",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B22128",
"EmployeeName": "Priya P M",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "6383062765",
"Email": "priyachandramadhu@gmail.com",
"CurrentAddress": "13B, Narashimmapuram street, kamarajar salai, madurai - 625009.",
"PermanentAddress": "13B, Narashimmapuram street, kamarajar salai, madurai - 625009.",
"PAN": "GXCPM2131R",
"Aadhar": "854880184241",
"BloodGroup": "AB+Ve"
},
{
"EmpID": "B22131",
"EmployeeName": "Sriram R",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8072446248",
"Email": "sriram.ram42@gmail.com",
"CurrentAddress": "No 36 Saratha Nagar 3rd Street Korattur Chennai 600076",
"PermanentAddress": "No 36 Saratha Nagar 3rd Street Korattur Chennai 600076",
"PAN": "JIKPS0739H",
"Aadhar": "634350098010",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22141",
"EmployeeName": "Kameswaran R",
"Dept": "C.M.S.",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "9566697374",
"Email": "kameshwaran7374@gmail.com",
"CurrentAddress": "1/74/1 S.pallipattu, near Railway Gate, Adiyur post ,Tirupattur Taluk, Tirupattur District -635602 ,Tamil Nadu",
"PermanentAddress": "1/74/1 S.pallipattu, near Railway Gate, Adiyur post ,Tirupattur Taluk, Tirupattur District -635602 ,Tamil Nadu",
"PAN": "EFGPK3823G",
"Aadhar": "544749868603",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22143",
"EmployeeName": "Syed Navassherif S",
"Dept": "C.M.S.",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "8220401575",
"Email": "navasherif2398@gmail.com",
"CurrentAddress": "181 B PN road Kunnathur Tirupur district - 638103",
"PermanentAddress": "181 B PN road Kunnathur Tirupur district - 638103",
"PAN": "GZJPS2908M",
"Aadhar": "218831832102",
"BloodGroup": "A1+Ve"
},
{
"EmpID": "B22149",
"EmployeeName": "Shalman M",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "7538845045",
"Email": "shalman.mohamedaniba@gmail.com",
"CurrentAddress": "260,Kamaraja Puram, Sattur -626203, Virudhunagar Dist",
"PermanentAddress": "260,Kamaraja Puram, Sattur -626203, Virudhunagar Dist",
"PAN": "GIEPM7975N",
"Aadhar": "718209150008",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22152",
"EmployeeName": "Valarmathi V",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8056140918",
"Email": "valarmathiv505@gmail.com",
"CurrentAddress": "125/ 78 Sastri Nagar 1 St Street Sharma nagar vysarpadi chennai 600039",
"PermanentAddress": "125/ 78 Sastri Nagar 1 St Street Sharma nagar vysarpadi chennai 600039",
"PAN": "BZVPV7262E",
"Aadhar": "807068814118",
"BloodGroup": "A1+Ve"
},
{
"EmpID": "B22156",
"EmployeeName": "Priyanka C",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "6369667259",
"Email": "priyankavanitha21@gmail.com",
"CurrentAddress": "3/468,Anna Nagar East,Kaikolapalayam,Perundurai,Erode-638056",
"PermanentAddress": "3/468,Anna Nagar East,Kaikolapalayam,Perundurai,Erode-638056",
"PAN": "CPNPC3916D",
"Aadhar": "685996443482",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22157",
"EmployeeName": "Viral Kothari K",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9500191317",
"Email": "Viralkothari.cs@gmail.com",
"CurrentAddress": "No 62/93/1, Kandasamy Koil Street, Perambur Barracks Road, Kosapet-600012",
"PermanentAddress": "No 62/93/1, Kandasamy Koil Street, Perambur Barracks Road, Kosapet-600012",
"PAN": "AQGPV1945F",
"Aadhar": "436746962240",
"BloodGroup": "A+Ve"
},
{
"EmpID": "B22161",
"EmployeeName": "Kathiravan P",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "6383964419",
"Email": "kathiravanpalani03@gmail.com",
"CurrentAddress": "No: 172/A, Chinna Street, Kamambut, Katpadi, Vellore-632519",
"PermanentAddress": "No: 172/A, Chinna Street, Kamambut, Katpadi, Vellore-632519",
"PAN": "IOLPK3965P",
"Aadhar": "349456552478",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22162",
"EmployeeName": "Prem Kumar G",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8610576310",
"Email": "prmkmr507@gmail.com",
"CurrentAddress": "#NO 1/145 Linga reddyur village, kandepude post, katapdi TK, vellore -632106",
"PermanentAddress": "#NO 1/145 Linga reddyur village, kandepude post, katapdi TK, vellore -632106",
"PAN": "CADPP1639K",
"Aadhar": "801796916037",
"BloodGroup": "A+Ve"
},
{
"EmpID": "B22166",
"EmployeeName": "Kamatchi M",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8807975792",
"Email": "Kamatchimohan1988@gmail.com",
"CurrentAddress": "No. 928, sowbakiya nagar, vishnupriya avenue, Guduvanchery, Chennai - 603202",
"PermanentAddress": "No. 928, sowbakiya nagar, vishnupriya avenue, Guduvanchery, Chennai - 603202",
"PAN": "BGQPK9397H",
"Aadhar": "769124283620",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22181",
"EmployeeName": "Diwakar N",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9962412494",
"Email": "diwakarn0616@gmail.com",
"CurrentAddress": "4/48,3rd street,Balaji nagar,lyyappanthangal,chennai-600122",
"PermanentAddress": "4/48,3rd street,Balaji nagar,lyyappanthangal,chennai-600122",
"PAN": "EQQPD5948N",
"Aadhar": "533679231486",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B22182",
"EmployeeName": "Vaitheeshwaran J",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "6374234489",
"Email": "vaitheeshca3006@gmail.com",
"CurrentAddress": "No:20,2nd street, Annamalai Nagar, Avadi, Chennai-600054",
"PermanentAddress": "No:20,2nd street, Annamalai Nagar, Avadi, Chennai-600054",
"PAN": "CJZPJ9628P",
"Aadhar": "647324152304",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B22184",
"EmployeeName": "Siva Rama Krishnan P",
"Dept": "C.M.S.",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "7708507040",
"Email": "sivaramkrishan28@gmail.com",
"CurrentAddress": "No:47/51, Perumal South Street, Nagapattinam, TAMIL NADU-611 001.",
"PermanentAddress": "No:47/51, Perumal South Street, Nagapattinam, TAMIL NADU-611 001.",
"PAN": "IPOPK5324E",
"Aadhar": "687203701123",
"BloodGroup": "A1+Ve"
},
{
"EmpID": "B22195",
"EmployeeName": "Vijayakumar P",
"Dept": "I.T. Admin.",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Cloud Practitioner",
"PhoneNumber": "9840413353",
"Email": "vijayakumarparthip@gmail.com",
"CurrentAddress": "No 1064 B, 29th street, B V colony, Vyasarpadi, Chennai : 600039",
"PermanentAddress": "No 1064 B, 29th street, B V colony, Vyasarpadi, Chennai : 600039",
"PAN": "AQBPV6120F",
"Aadhar": "421685252153",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B22205",
"EmployeeName": "Tamilarasan P",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9943525511",
"Email": "tamilca@gmail.com",
"CurrentAddress": "No.1/692, Shanthi Nagar, 4th Cross Street, Andankovil East, Athur, Karur - 639008",
"PermanentAddress": "No.1/692, Shanthi Nagar, 4th Cross Street, Andankovil East, Athur, Karur - 639008",
"PAN": "AITPT6118P",
"Aadhar": "225674879615",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B23008",
"EmployeeName": "Shajin R T",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9043193238",
"Email": "rtshajin2016@gmail.com",
"CurrentAddress": "17/60, Thickanamcode, Kanyakumari District",
"PermanentAddress": "17/60, Thickanamcode, Kanyakumari District",
"PAN": "BXOPT6950L",
"Aadhar": "793462858399",
"BloodGroup": "A1+Ve"
},
{
"EmpID": "B23011",
"EmployeeName": "Rathinasabapathi A",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9443275260",
"Email": "rathinasabapathi99@gmail.com",
"CurrentAddress": "27 A, Vadakkirppu, AnnamalaiNagar, Chidambaram (Tk), Cuddalore (Dt)",
"PermanentAddress": "27 A, Vadakkirppu, AnnamalaiNagar, Chidambaram (Tk), Cuddalore (Dt)",
"PAN": "GEVPR7789G",
"Aadhar": "506140426665",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B23016",
"EmployeeName": "Balaji S",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9940284228",
"Email": "Balaji.ji67@gmail.com",
"CurrentAddress": "#11/53,Plot No 19 Lakshimi Nagar,Manali New Town, Chennai - 600103",
"PermanentAddress": "#11/53,Plot No 19 Lakshimi Nagar,Manali New Town, Chennai - 600103",
"PAN": "DWZPS5936P",
"Aadhar": "735825095321",
"BloodGroup": "B-Ve"
},
{
"EmpID": "B23028",
"EmployeeName": "Ashwinkumar R",
"Dept": "Cloud C.O.E.",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Cloud Practitioner, AWS Certified Solutions Architect - Associate",
"PhoneNumber": "7550206949",
"Email": "ashwinkumar1015@gmail.com",
"CurrentAddress": "No:1/146, Nehru Street, Mudichur, Chennai-600048.",
"PermanentAddress": "No:1/146, Nehru Street, Mudichur, Chennai-600048.",
"PAN": "FCPPR5911H",
"Aadhar": "486193956331",
"BloodGroup": "A1+Ve"
},
{
"EmpID": "B23035",
"EmployeeName": "Kokila V",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9791520722",
"Email": "kokilamca3@gmail.com",
"CurrentAddress": "3/280 Mail road, Karumbanoor, Kalathimadam(p.o), Alangulam(T.K), Tenkasi(D.S) 627851",
"PermanentAddress": "3/280 Mail road, Karumbanoor, Kalathimadam(p.o), Alangulam(T.K), Tenkasi(D.S) 627851",
"PAN": "ALMAPK2793K",
"Aadhar": "343612620625",
"BloodGroup": "AB+Ve"
},
{
"EmpID": "B23039",
"EmployeeName": "Pagadavarapu Dileep",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "8008800938",
"Email": "pagadavarapudileep@gmail.com",
"CurrentAddress": "4-96 Kondakodima, Wyra, Khammam,Telangana, 507165",
"PermanentAddress": "4-96 Kondakodima, Wyra, Khammam,Telangana, 507165",
"PAN": "CGRPP4241B",
"Aadhar": "834086357902",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B23040",
"EmployeeName": "Thulasiraja M",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9952008004",
"Email": "robinsondear@gmail.com",
"CurrentAddress": "14/3, V G N Street, Devaraj Nagar, Saligramam, Chennai-93",
"PermanentAddress": "14/3, V G N Street, Devaraj Nagar, Saligramam, Chennai-93",
"PAN": "AGWPT5638D",
"Aadhar": "949841378913",
"BloodGroup": "A+Ve"
},
{
"EmpID": "B23043",
"EmployeeName": "Priyanka Pannerselvam",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "6374325863",
"Email": "Priyanka17jeppiar@gmail.com",
"CurrentAddress": "No:48 Bajanai Kovil street Melnaduvakarai Anna Nagar",
"PermanentAddress": "No:48 Bajanai Kovil street Melnaduvakarai Anna Nagar",
"PAN": "GGKPP2127K",
"Aadhar": "688710246748",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B23044",
"EmployeeName": "Bijeta Dubey",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9537799745",
"Email": "bijetadubey@gmail.com",
"CurrentAddress": "Near dada darbar Ekta colony Sagar (Madhya Pradesh)",
"PermanentAddress": "Near dada darbar Ekta colony Sagar (Madhya Pradesh)",
"PAN": "ALVPD5898B",
"Aadhar": "260481027160",
"BloodGroup": "A+Ve"
},
{
"EmpID": "B23047",
"EmployeeName": "Shankar Kumar M",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "7397321273",
"Email": "Shankarkumarsk1912@gmail.com",
"CurrentAddress": "No:217, 6th Block, Kannadasan Nagar, Kodungaiyur, Chennai-600118.",
"PermanentAddress": "No:217, 6th Block, Kannadasan Nagar, Kodungaiyur, Chennai-600118.",
"PAN": "LQKPS0583F",
"Aadhar": "674626871763",
"BloodGroup": "B+Ve"
},
{
"EmpID": "B23048",
"EmployeeName": "Kirankumar B",
"Dept": "C.M.S.",
"Domain": "A.W.S.",
"Certifications": "AWS Certified Solutions Architect - Associate",
"PhoneNumber": "7358021638",
"Email": "KiranKumar21638@gmail.com",
"CurrentAddress": "35 west street puliyur kurinjipadi(TK) cuddalore(Dist)- 607301",
"PermanentAddress": "35 west street puliyur kurinjipadi(TK) cuddalore(Dist)- 607301",
"PAN": "BBGPK7792B",
"Aadhar": "398377816124",
"BloodGroup": "O+Ve"
},
{
"EmpID": "B23054",
"EmployeeName": "Dharanitharan Murugan",
"Dept": "",
"Domain": "",
"Certifications": "",
"PhoneNumber": "9659459414",
"Email": "dharanithedev@gmail.com",
"CurrentAddress": "2/333, Avvaiyar Street, M A nagar, Redhills, Chennai - 600052",
"PermanentAddress": "2/333, Avvaiyar Street, M A nagar, Redhills, Chennai - 600052",
"PAN": "CCJPD9407P",
"Aadhar": "249465136234",
"BloodGroup": "A1+Ve"
}];
const HR = () => {
  const [showPayrollModal, setShowPayrollModal] = useState(false);
  const [showBenefitsModal, setShowBenefitsModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [activeTab, setActiveTab] = useState("resources");
  const [activeFormTab, setActiveFormTab] = useState("onboarding");
  const [docToView, setDocToView] = useState(null);
  const [showDocModal, setShowDocModal] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  {/*
    sample */}
  const formsData = {
    "onboarding": [
      { name: "Access Request Form", fileName: "Access_Request_Form.pdf", updated: "Jun 16, 2025" },
      { name: "Employee Information Form", fileName: "Employee_Information_Form.pdf", updated: "Jun 16, 2025" },
      { name: "Form11", fileName: "Form11.pdf", updated: "Jun 16, 2025" },
      { name: "Gratuity Nomination Form", fileName: "Gratuity_Nomination_Form.pdf", updated: "Jun 16, 2025" },
      { name: "Insurance Enrolment Form", fileName: "Insurance_Enrolment_Form.pdf", updated: "Jun 16, 2025" },
      { name: "Letter of Undertaking Onboarding", fileName: "Letter_of_Undertaking_Onboarding.pdf", updated: "Jun 16, 2025" },
    ],
    "bgv": [
      { name: "Candidate Information form", fileName: "Candidate_Information_form_BGV.pdf", updated: "Jun 16, 2025" },
      { name: "Letter of Authorization", fileName: "Letter_of_Authorization_BGV.pdf", updated: "Jun 16, 2025" },
    ],
    "rewards": [
      { name: "Nomination Form - Associate of the Year", fileName: "Nomination_Associate_Year.pdf", updated: "Jun 16, 2025" },
      { name: "Nomination Form - Star of the Quarter", fileName: "Nomination_Star_Quarter.pdf", updated: "Jun 16, 2025" },
      { name: "Nomination Form - Team of the Quarter", fileName: "Nomination_Team_Quarter.pdf", updated: "Jun 16, 2025" },
      { name: "Nomination Form - Team of the Year", fileName: "Nomination_Team_Year.pdf", updated: "Jun 16, 2025" },
    ],
    "others": [
      { name: "Contract Invoice Template ", fileName: "Contract_Invoice_Template.pdf", updated: "Jun 16, 2025" },
      { name: "Contract Timesheet Template", fileName: "Contract_Timesheet_Template.pdf", updated: "Jun 16, 2025" },
      { name: "Expense Reimbursement Form 3", fileName: "Expense_Reimbursement_Form_3.pdf", updated: "Jun 16, 2025" },
      { name: "Induction Feedback Form", fileName: "Induction_Feedback_Form.pdf", updated: "Jun 16, 2025" },
      { name: "Intern to Onroll Movement Template", fileName: "Intern_to_Onroll_Template.pdf", updated: "Jun 16, 2025" },
      { name: "PIP Letter Template 2", fileName: "PIP_Letter_Template_2.pdf", updated: "Jun 16, 2025" },
    ],
    "separation": [
      { name: "Associate Clearance Form", fileName: "Associate_Clearance_Form.pdf", updated: "Jun 16, 2025" },
      { name: "Exit Interview Template", fileName: "Exit_Interview_Template.pdf", updated: "Jun 16, 2025" },
      { name: "Gratuity Declaration Form", fileName: "Gratuity_Declaration_Form.pdf", updated: "Jun 16, 2025" },
      { name: "Leave Encashment Declaration Form", fileName: "Leave_Encashment_Declaration_Form.pdf", updated: "Jun 16, 2025" },
      { name: "Letter of Undertaking", fileName: "Letter_of_Undertaking.pdf", updated: "Jun 16, 2025" },
    ],
  };

  const team = [
    {
      name: "Sivakumar Natarajan",
      role: "Head - People & Culture",
      email: "siva.kumar@securekloud.com",
      phone: "9940103400",
    },
    {
      name: "Cynthia V",
      role: "Manager - H.R.",
      email: "cynthia.v@securekloud.com",
      phone: "9841550407",
    },
    {
      name: "Ezhilarasi S",
      role: "Lead - H.R.",
      email: "ezhilarasi.sekar@securekloud.com",
      phone: "8610841056",
    },
  ];

  // Map HR team to employee directory for email/phone where applicable
  const enrichedEmployeeDirectory = employeeDirectory.map(emp => {
    const hrMatch = team.find(t => t.name === emp.EmployeeName);
    return {
      ...emp,
      email: hrMatch ? hrMatch.email : `${emp.EmployeeName.replace(/\s+/g, '.').toLowerCase()}@securekloud.com`,
      phone: hrMatch ? hrMatch.phone : "N/A",
    };
  });

  const handleView = (fileName) => {
    if (fileName) {
      setDocToView(`/files/${fileName}`);
      setShowDocModal(true);
    } else {
      alert("File not found for: " + fileName);
    }
  };

  const handleDownload = (fileName) => {
    if (fileName) {
      const link = document.createElement("a");
      link.href = `/files/${fileName}`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("File not found for: " + fileName);
    }
  };

  const renderFormTabContent = (tabForms) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tabForms.map((form, index) => (
        <Card
          key={index}
          className="p-2 text-xs space-y-0.5 shadow-sm border rounded-md"
        >
          <CardHeader className="pb-2">
            <CardTitle>{form.name}</CardTitle>
            <CardDescription>Last updated: {form.updated}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              {form.fileName && (
                <>
                  {form.fileName.endsWith(".pdf") && (
                    <button
                      onClick={() => handleView(form.fileName)}
                      className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-md"
                    >
                      View
                    </button>
                  )}
                  <a
                    href={`/files/${form.fileName}`}
                    download
                    className="text-sm px-2 py-1 bg-gray-100 text-gray-800 rounded-md"
                  >
                    Download
                  </a>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderFormTabs = () => (
    <Tabs value={activeFormTab} onValueChange={setActiveFormTab} className="mt-6">
      <TabsList className="grid w-full sm:w-[800px] grid-cols-5">
        <TabsTrigger value="onboarding">On board Forms</TabsTrigger>
        <TabsTrigger value="bgv">BGV Forms</TabsTrigger>
        <TabsTrigger value="rewards">Rewards & Recognition</TabsTrigger>
        <TabsTrigger value="others">Others</TabsTrigger>
        <TabsTrigger value="separation">Separation</TabsTrigger>
      </TabsList>
      <TabsContent value="onboarding" className="pt-6">
        {renderFormTabContent(formsData["onboarding"])}
      </TabsContent>
      <TabsContent value="bgv" className="pt-6">
        {renderFormTabContent(formsData["bgv"])}
      </TabsContent>
      <TabsContent value="rewards" className="pt-6">
        {renderFormTabContent(formsData["rewards"])}
      </TabsContent>
      <TabsContent value="others" className="pt-6">
        {renderFormTabContent(formsData["others"])}
      </TabsContent>
      <TabsContent value="separation" className="pt-6">
        {renderFormTabContent(formsData["separation"])}
      </TabsContent>
    </Tabs>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-skcloud-dark-purple">Human Resources</h1>
        <p className="text-muted-foreground mt-1">Access HR resources, tools, and information</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full sm:w-[600px] grid-cols-3">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="team">HR Team</TabsTrigger>
          <TabsTrigger value="forms">HR Forms</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Employee Handbook",
                description: "Company policies and procedures",
                content: "Access the latest employee handbook containing all company policies, procedures, and guidelines.",
              },
              {
                title: "Benefits Information",
                description: "Health, retirement, and more",
                content: "Learn about your benefits package, including health insurance, retirement plans, and additional perks.",
              },
              {
                title: "Leave Management",
                description: "Request and track time off",
                content: "Submit leave requests, view your balance, and track approval status for time off.",
              },
              {
                title: "Payroll Information",
                description: "Pay slips and tax documents",
                content: "Access your pay slips, tax documents, and manage your payment details.",
              },
              {
                title: "Employee Directory",
                description: "Find and connect with colleagues",
                content: "View details of all employees including contact information and certifications.",
              },
            ].map((card, i) => (
              <Card key={i} className="sk-card">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{card.content}</p>
                  <Button
                    variant="outline"
                    className="w-full border-skcloud-purple text-skcloud-purple hover:bg-skcloud-purple hover:text-white"
                    onClick={() => {
                      if (card.title === "Payroll Information") {
                        setShowPayrollModal(true);
                      } else if (card.title === "Benefits Information") {
                        setShowBenefitsModal(true);
                      } else if (card.title === "Leave Management") {
                        setShowLeaveModal(true);
                      } else if (card.title === "Employee Directory") {
                        setShowEmployeeModal(true);
                      }
                    }}
                  >
                    View {card.title.split(" ")[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="team" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <Card key={idx} className="sk-card">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-skcloud-purple/20 mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-skcloud-purple">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <CardTitle className="text-center mt-3">{member.name}</CardTitle>
                  <CardDescription className="text-center">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm mb-2">Email: {member.email}</p>
                  <p className="text-sm">Phone: {member.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="forms" className="mt-6">
          {renderFormTabs()}
        </TabsContent>
      </Tabs>

      {/* Payroll Modal */}
      <Dialog open={showPayrollModal} onOpenChange={setShowPayrollModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payroll Information</DialogTitle>
            <DialogDescription>
              <div className="text-left text-sm space-y-6 mt-4 text-muted-foreground">
                <table className="w-full text-sm border border-gray-300 rounded-md">
                  <thead>
                    <tr className="bg-blue-600 text-white text-left">
                      <th className="p-2 w-1/2">Details</th>
                      <th className="p-2 w-1/2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        detail: "Payroll Cycle",
                        description: "The payroll cycle for a month is 21st of previous month to the 20th of the current month.",
                      },
                      {
                        detail: "Associate Responsibilities",
                        description: "Associates must apply for Leaves, Compensatory Leave, and On Duty in ADP by 20th.",
                      },
                      {
                        detail: "Manager Approvals",
                        description: "Manager approvals are required by the 20th; else system auto-approves.",
                      },
                      {
                        detail: "Timesheets",
                        description: "Timesheets validated by managers and department heads are essential for allowance claims.",
                      },
                      {
                        detail: "Late Inputs",
                        description: "Late inputs after the 20th won’t be processed for payroll.",
                      },
                    ].map((item, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="p-2 font-medium">{item.detail}</td>
                        <td className="p-2">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Benefits Modal */}
      <Dialog open={showBenefitsModal} onOpenChange={setShowBenefitsModal}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Benefits Information</DialogTitle>
            <DialogDescription className="text-left text-sm space-y-6 mt-4 text-muted-foreground">
              {/* Group Mediclaim Insurance Table */}
              <div>
                <h2 className="font-semibold text-base mb-2">Group Mediclaim Insurance (Oct-24 to Oct-25)</h2>
                <table className="w-full text-sm border border-gray-300 rounded-md">
                  <thead>
                    <tr className="bg-blue-600 text-white text-left">
                      <th className="p-2 w-1/2">Details</th>
                      <th className="p-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Name of the Insurer", "Bajaj Allianz General Insurance Co Ltd"],
                      ["Name of the Broker", "Spot Solutions"],
                      ["Contact Number in case of Emergency", "Ms. Dhanalakshmi – 9710444021"],
                      ["Coverage", "2.0 Lakhs (1 + 5 – Employee, Spouse, 2Kids & Parents or In-Laws) as already provided to us. Newly married spouse and new born kids shall be added within 30 days."],
                      ["Co-Payment", "No Co-pay from the employee"],
                      ["Pre-Existing Disease", "Covered"],
                      ["Maternity", "Covered up to Rs. 50,000/-"],
                      ["Day 1 cover for new born baby", "Covered upto floater Sum Insured"],
                      ["Pre-Hospitalization Covered", "30 Days before hospitalization"],
                      ["Post Hospitalization Covered", "60 Days after hospitalization"],
                      ["Room Rent Limits Including Boarding, Nursing Charges etc.", "Single Standard AC Room per day Rs. 12,000 per day (For I.C.U)"],
                      ["Ambulance Expenses Limits", "Rs. 2,000 per Hospitalization"],
                      ["Claim Intimation", "Within 24 Hrs of hospitalization (email)"],
                      ["Claim Submission Period", "15 Days"],
                      ["Chemotherapy / Oral Chemotherapy", "Chemotherapy Covered and Oral Chemotherapy not covered"],
                      ["AYUSH Treatment", "Ayurvedic Treatment covered only in Govt registered Hospitals restricted to 25% of the Sum Insured subject to maximum of Rs. 25,000/-"],
                    ].map(([label, value], i) => (
                      <tr key={i} className="border-t border-gray-200">
                        <td className="p-2 font-medium">{label}</td>
                        <td className="p-2">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Group Personal Accident Insurance Table */}
              <div>
                <h2 className="font-semibold text-base mb-2">Group Personal Accident Insurance (Nov-24 to Nov-25)</h2>
                <table className="w-full text-sm border border-gray-300 rounded-md">
                  <thead>
                    <tr className="bg-blue-600 text-white text-left">
                      <th className="p-2 w-1/2">Details</th>
                      <th className="p-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Insurer", "ICICI Lombard"],
                      ["Broker", "E-Medlife Insurance Broking"],
                      ["Emergency Contact", "Mr. Siva Raman - 9840088954, Ms. Srividhya - 9840001568"],
                      ["Sum Insured", "5x Annual Fixed CTC"],
                      ["Coverage", "Total/Partial/Temporary Disablement, Death Cover"],
                      ["Weekly Compensation", "1% of CSI up to 104 weeks (max ₹5,000/week)"],
                      ["Accident Medical Expenses", "40% of claim or 10% SI or actual (whichever is less)"],
                      ["Ambulance Charges", "₹2,000"],
                      ["Education Funds", "₹10,000 per child (max 2, up to 25 years)"],
                      ["Repatriation", "₹10,000 or actual"],
                      ["Dead Body Carriage", "2% of SI or max ₹2,500"],
                    ].map(([label, value], index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="p-2 font-medium">{label}</td>
                        <td className="p-2">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Keep rest unchanged */}
              <div>
                <h2 className="font-semibold text-base">Certification Reimbursement</h2>
                <p>
                  Certification costs are reimbursed upon prior approval from both SBU Head and HR Head. Associates must email the certificate, invoice, and reimbursement form after completing the course. Team HR and People & Culture Head will review and forward approval to Team Accounts. Reimbursement is credited post-approval.
                </p>
                <p>
                  <strong>Note:</strong> Employee must serve at least 1 year after claiming reimbursement, else amount is recovered from F&F.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-base">Working in Night Shift / On-call Support</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Night Shift Allowance:</strong> ₹300/night for working between 9:00 PM to 7:00 AM (not for regular night shift roles)</li>
                  <li><strong>On-call Support:</strong> ₹300/day beyond normal hours</li>
                  <li>Manager must submit validated data to <a href="mailto:hr@securekloud.com" className="underline">hr@securekloud.com</a> by 20th of each month</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-base">Local Travel</h2>
                <p>
                  Business travel expenses reimbursed upon prior approval. Submit expense form with bills to Team Accounts after Manager/Dept. Head approval.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>₹8/km for two-wheelers</li>
                  <li>₹12/km for four-wheelers</li>
                  <li>Reimbursement within 2 weeks of claim submission</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-base">Team Outing Allowance</h2>
                <p>
                  ₹1,500 is allowed twice a year for organized team lunches/dinners. Expenses must be pre-approved and follow reimbursement procedures.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Leave Modal */}
      <Dialog open={showLeaveModal} onOpenChange={setShowLeaveModal}>
        <DialogContent className="max-h-[90vh] overflow-y-auto  max-w-4xl">
          <DialogHeader>
            <DialogTitle>Leave Management</DialogTitle>
            <DialogDescription className="text-left mt-4 space-y-6 text-muted-foreground text-sm">
              <div>
                <h2 className="font-semibold text-base mb-2">Leave Types</h2>
                <table className="w-full text-sm border border-gray-300 rounded-md">
                  <thead>
                    <tr className="bg-blue-600 text-white text-left">
                      <th className="p-2 w-1/4">Leave Type</th>
                      <th className="p-2 w-1/4">Applicability</th>
                      <th className="p-2 w-1/4">Eligibility</th>
                      <th className="p-2 w-1/4">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Sick and Casual Leave",
                        applicability: "To all employees",
                        eligibility: "24 working days",
                        remarks: [
                          "No carry forward for next year",
                          "No encashment",
                        ],
                      },
                      {
                        type: "Earned / Privilege Leave",
                        applicability: "To all confirmed employees",
                        eligibility: "12 working days",
                        remarks: [
                          "Can carry forward maximum 45 days",
                          "Encashment at the time of relieving",
                        ],
                      },
                      {
                        type: "Maternity Leave",
                        applicability: "Female employees who have worked for 80 days",
                        eligibility: "26 weeks (including all weekends and holidays)",
                        remarks: [
                          "Leave has to be availed 1 month before expected delivery",
                          "6 weeks of miscarriage leave in lieu of maternity leave",
                          "Only for first 2 deliveries",
                          "No carry forward or encashed",
                        ],
                      },
                      {
                        type: "Paternity Leave",
                        applicability: "Male employees who have worked for 80 days post confirmation",
                        eligibility: "5 working days",
                        remarks: [
                          "Only for first 2 children",
                          "No carry forward or encashed",
                        ],
                      },
                      {
                        type: "Marriage Leave",
                        applicability: "To all confirmed employees",
                        eligibility: "5 working days",
                        remarks: [
                          "Only for the first marriage",
                          "Once in the lifetime of the employee",
                          "No carry forward or encashed",
                        ],
                      },
                    ].map((leave, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="p-2 font-medium">{leave.type}</td>
                        <td className="p-2">{leave.applicability}</td>
                        <td className="p-2">{leave.eligibility}</td>
                        <td className="p-2">
                          <ul className="list-disc pl-5 space-y-1">
                            {leave.remarks.map((remark, i) => (
                              <li key={i}>{remark}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Document View Modal */}
      <Dialog open={showDocModal} onOpenChange={setShowDocModal}>
        <DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="px-4 pt-4 pb-2">
            <DialogTitle>Document Preview</DialogTitle>
          </DialogHeader>
          {docToView ? (
            <iframe
              src={`${docToView}#toolbar=1&navpanes=0&view=fitH`}
              title="Document Viewer"
              className="w-full h-[90vh]"
            />
          ) : (
            <p className="text-sm text-muted-foreground">No document selected</p>
          )}
        </DialogContent>
      </Dialog>

      {/* Employee Directory Modal */}
     {/* Employee Directory Modal */}
     {/* Employee Directory Modal */}
<Dialog open={showEmployeeModal} onOpenChange={setShowEmployeeModal}>
  <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl p-6">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold text-skcloud-dark-purple text-center mb-4">
        Employee Directory
      </DialogTitle>
      <DialogDescription className="text-center text-gray-600 mb-6">
        Explore details of all employees including contact information and certifications.
      </DialogDescription>
    </DialogHeader>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {enrichedEmployeeDirectory.map((employee, idx) => (
        <Card
          key={idx}
          className="bg-gradient-to-br from-white to-gray-50 hover:shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-200 rounded-xl overflow-hidden"
        >
          <CardHeader className="p-4 bg-skcloud-purple/10 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-skcloud-purple/20 flex items-center justify-center">
              <span className="text-xl font-semibold text-skcloud-purple">
                {employee.EmployeeName.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <CardTitle className="text-lg font-semibold mt-2 text-gray-800">
              {employee.EmployeeName}
            </CardTitle>
            <CardDescription className="text-sm text-gray-500">
              Emp ID: {employee.EmpID}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 space-y-2 text-sm">
            <p className="text-gray-700">
              <span className="font-medium">Dept:</span> {employee.Dept || "N/A"}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Domain:</span> {employee.Domain || "N/A"}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> {employee.email}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Phone:</span> {employee.phone}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Certifications:</span>{" "}
              {employee.Certifications || "None"}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </DialogContent>
</Dialog>

    </div>
  );
};

export default HR;