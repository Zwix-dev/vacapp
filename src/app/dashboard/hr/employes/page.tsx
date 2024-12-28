"use client"

import { useState, useMemo } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, ExternalLink, Clock, Users, Briefcase, Calendar } from 'lucide-react'

interface Employee {
  id: number
  name: string
  role: string
  department: string
  email: string
  phone: string
  imageUrl: string
  hoursAbsent: number
  hireDate: Date
}

const employees: Employee[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Senior Developer',
    department: 'Engineering',
    email: 'alex.j@company.com',
    phone: '(555) 123-4567',
    imageUrl: '/placeholder.svg?height=40&width=40',
    hoursAbsent: 8,
    hireDate: new Date('2020-03-15'),
  },
  {
    id: 2,
    name: 'Samantha Lee',
    role: 'UX Designer',
    department: 'Design',
    email: 'samantha.l@company.com',
    phone: '(555) 234-5678',
    imageUrl: '/placeholder.svg?height=40&width=40',
    hoursAbsent: 16,
    hireDate: new Date('2021-07-01'),
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Product Manager',
    department: 'Product',
    email: 'michael.c@company.com',
    phone: '(555) 345-6789',
    imageUrl: '/placeholder.svg?height=40&width=40',
    hoursAbsent: 4,
    hireDate: new Date('2019-11-10'),
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    department: 'Analytics',
    email: 'emily.r@company.com',
    phone: '(555) 456-7890',
    imageUrl: '/placeholder.svg?height=40&width=40',
    hoursAbsent: 24,
    hireDate: new Date('2022-02-28'),
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    department: 'Analytics',
    email: 'emily.r@company.com',
    phone: '(555) 456-7890',
    imageUrl: '/placeholder.svg?height=40&width=40',
    hoursAbsent: 24,
    hireDate: new Date('2022-02-28'),
  }, 
  {
    id: 6,
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    department: 'Analytics',
    email: 'emily.r@company.com',
    phone: '(555) 456-7890',
    imageUrl: '/placeholder.svg?height=40&width=40',
    hoursAbsent: 24,
    hireDate: new Date('2022-02-28'),
  },
  {
    id: 7,
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    department: 'Analytics',
    email: 'emily.r@company.com',
    phone: '(555) 456-7890',
    imageUrl: '/placeholder.svg?height=40&width=40',
    hoursAbsent: 24,
    hireDate: new Date('2022-02-28'),
  },
  {
    id: 8,
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    department: 'Analytics',
    email: 'emily.r@company.com',
    phone: '(555) 456-7890',
    imageUrl: '/placeholder.svg?height=40&width=40',
    hoursAbsent: 24,
    hireDate: new Date('2022-02-28'),
  },

]

export default function EmployeeDashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  const [departmentFilter, setDepartmentFilter] = useState('All')

  const filteredEmployees = useMemo(() => {
    return employees.filter(employee =>
      (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       employee.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (departmentFilter === 'All' || employee.department === departmentFilter)
    )
  }, [searchTerm, departmentFilter])

  const totalHoursAbsent = useMemo(() => {
    return filteredEmployees.reduce((total, employee) => total + employee.hoursAbsent, 0)
  }, [filteredEmployees])

  const departments = useMemo(() => {
    return ['All', ...new Set(employees.map(employee => employee.department))]
  }, [])

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Tableau de Bord des Employés</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Heures d'Absence</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalHoursAbsent} heures</div>
            <p className="text-xs text-muted-foreground">Pour tous les employés filtrés</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nombre d'Employés</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredEmployees.length}</div>
            <p className="text-xs text-muted-foreground">Employés actifs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Départements</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{departments.length - 1}</div>
            <p className="text-xs text-muted-foreground">Départements actifs</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          type="text"
          placeholder="Rechercher des employés..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/2"
        />
        <Select onValueChange={setDepartmentFilter} defaultValue="All">
          <SelectTrigger className="md:w-1/2">
            <SelectValue placeholder="Filtrer par département" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dept) => (
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Employé</TableHead>
              <TableHead>Rôle</TableHead>
              <TableHead>Secteur</TableHead>
              <TableHead>Date d'embauche</TableHead>
              <TableHead>Heures d'Absence</TableHead>
              <TableHead>Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={employee.imageUrl} alt={employee.name} />
                      <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span>{employee.name}</span>
                  </div>
                </TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{employee.department}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    {formatDate(employee.hireDate)}
                  </div>
                </TableCell>
                <TableCell>{employee.hoursAbsent}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <a href={`mailto:${employee.email}`} className="text-blue-600 hover:text-blue-800">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href={`tel:${employee.phone}`} className="text-green-600 hover:text-green-800">
                      <Phone className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

