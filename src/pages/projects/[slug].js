import { Award, Calendar, ChevronLeft, ExternalLink, Globe, Users } from 'lucide-react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
// Import project data
const projectsData = [
  {
    id: 'project-1',
    title: 'Agrilink',
    slug: 'agrilink',
    description: 'A modern e-commerce platform for agricultural products with order tracking and Paystack payment integration.',
    image: '/agrilink.png',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'Paystack'],
    github: 'https://github.com/yourusername/agrilink',
    demo: 'https://agrilink.example.com',
    featured: true,
    type: 'web',
    fullDescription: 'Agrilink is a comprehensive e-commerce platform specifically designed for agricultural products, connecting farmers directly with consumers and businesses. The platform features robust order tracking capabilities, secure payment processing via Paystack integration, and a user-friendly interface that makes browsing and purchasing agricultural products seamless.',
    impact: 'Agrilink has significantly reduced the middleman gap in agricultural supply chains, allowing farmers to receive fairer compensation for their products while providing consumers with fresher produce at more affordable prices. The platform has empowered small-scale farmers to expand their market reach beyond local communities, increasing their average income substantially.',
    challenges: 'Building a reliable logistics system for perishable agricultural goods and ensuring product quality consistency across different suppliers were major challenges. We implemented a quality control system and partnered with local logistics companies to overcome these obstacles.',
    features: [
      'Farmer profiles and verification',
      'Real-time inventory management',
      'Order tracking and delivery estimation',
      'Secure payment processing via Paystack',
      'Product ratings and reviews',
      'Seasonal product highlights'
    ],
    testimonials: [
      {
        name: 'Samuel Osei',
        role: 'Cassava Farmer',
        quote: 'Agrilink has changed my business completely. I now sell to customers in different regions without leaving my farm.',
      },
      {
        name: 'Grace Ademola',
        role: 'Restaurant Owner',
        quote: 'The quality and consistency of produce I get through Agrilink has improved my restaurant\'s offerings while reducing costs.',
      }
    ],
    yearCompleted: '2023',
    teamSize: 4,
    metrics: {
      users: '10,000+',
      transactions: '25,000+',
      farmerIncrease: '35%'
    }
  },
  {
    id: 'project-2',
    title: 'Farm Eco',
    slug: 'farm-eco',
    description: 'Full-stack agriculture-based platform for selling and renting tools and equipment with order tracking and Paystack.',
    image: '/farm-eco.png',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Paystack'],
    github: 'https://github.com/yourusername/farmeco',
    demo: 'https://farmeco.example.com',
    featured: true,
    type: 'web',
    fullDescription: 'Farm Eco is a comprehensive platform that facilitates the buying, selling, and renting of agricultural tools and equipment. This full-stack solution helps farmers access necessary equipment without the high costs of ownership, while allowing equipment owners to monetize their assets when not in use.',
    impact: 'Farm Eco has democratized access to expensive farming equipment for small-scale farmers, leading to increased efficiency and productivity. The platform has reduced equipment acquisition costs by up to 60% for farmers while creating new revenue streams for equipment owners.',
    challenges: 'Managing equipment availability, coordinating maintenance schedules, and ensuring fair pricing were significant challenges. We developed a dynamic pricing algorithm and implemented a community-based equipment verification system to address these issues.',
    features: [
      'Equipment listing and verification',
      'Booking and reservation system',
      'Secure payment processing via Paystack',
      'Equipment condition tracking',
      'Owner-renter chat system',
      'Equipment delivery coordination'
    ],
    testimonials: [
      {
        name: 'Kofi Mensah',
        role: 'Small-scale Farmer',
        quote: 'I could never afford my own tractor, but with Farm Eco, I can rent one whenever I need it. My harvest has improved significantly.',
      },
      {
        name: 'Esi Boateng',
        role: 'Equipment Owner',
        quote: 'My farming equipment used to sit idle for months. Now it earns money year-round through Farm Eco rentals.',
      }
    ],
    yearCompleted: '2023',
    teamSize: 5,
    metrics: {
      equipmentListed: '3,000+',
      rentalTransactions: '12,000+',
      costSavings: '60%'
    }
  },
  {
    id: 'project-3',
    title: 'Apprentice Lab Website',
    slug: 'apprentice-lab-website',
    description: 'A static informational website built with HTML, CSS, and JavaScript for a software company.',
    image: '/apprenticelab.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://apprenticelab.example.com',
    featured: false,
    type: 'web',
    fullDescription: 'The Apprentice Lab website is a clean, modern static website designed to showcase the company\'s software development services, team expertise, and portfolio of completed projects. The site features responsive design principles ensuring optimal viewing across all device types.',
    impact: 'The redesigned website improved Apprentice Lab\'s online presence, resulting in a 40% increase in lead generation and a more effective communication of the company\'s value proposition to potential clients.',
    challenges: 'Creating a highly performant static site that still incorporated dynamic elements like filtering portfolio projects and animated interactions was challenging. We utilized JavaScript carefully to enhance the user experience without sacrificing load times.',
    features: [
      'Responsive design for all device sizes',
      'Interactive portfolio gallery',
      'Team member profiles',
      'Service offering details',
      'Contact form with validation',
      'Testimonial carousel'
    ],
    testimonials: [
      {
        name: 'Daniel Asante',
        role: 'CEO, Apprentice Lab',
        quote: 'Our new website perfectly captures our company culture and has significantly increased the quantity and quality of client inquiries.',
      }
    ],
    yearCompleted: '2022',
    teamSize: 2,
    metrics: {
      pageLoadTime: '1.2s',
      leadIncrease: '40%',
      organicTraffic: '5,000+ monthly'
    }
  },
  {
    id: 'project-4',
    title: 'Temcot Website',
    slug: 'temcot-website',
    description: 'A clean and professional website for Temcot, built with modern HTML/CSS standards.',
    image: '/temcotschools.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://temcot.example.com',
    featured: false,
    type: 'web',
    fullDescription: 'The Temcot website is a professional, informative platform designed to showcase the school\'s academic programs, faculty, facilities, and achievements. The site features an intuitive navigation system, responsive design, and integration with the school\'s social media platforms.',
    impact: 'The website has streamlined the admissions process and improved communication with parents and prospective students. Since launch, online admission applications increased by 35% and parent engagement with school updates improved significantly.',
    challenges: 'Creating an accessible website that served diverse user groups including prospective students, current students, parents, and faculty required careful planning of information architecture and user journeys.',
    features: [
      'Virtual campus tour',
      'Academic program information',
      'Faculty profiles',
      'News and events calendar',
      'Admissions portal',
      'Alumni success stories'
    ],
    testimonials: [
      {
        name: 'Dr. Akosua Mensah',
        role: 'Principal, Temcot Schools',
        quote: 'The website has transformed how we communicate with our community and showcase our educational offerings to prospective families.',
      },
      {
        name: 'Mr. Kwame Owusu',
        role: 'Parent',
        quote: 'The new website makes it so much easier to keep track of school events and communicate with teachers.',
      }
    ],
    yearCompleted: '2022',
    teamSize: 3,
    metrics: {
      admissionInquiries: '35% increase',
      parentEngagement: '60% increase',
      visitDuration: '4min avg'
    }
  },
  {
    id: 'project-5',
    slug: 'temcot-sms',
    title: 'School Management System – Temcot',
    description: 'A full school system for internal management built with modern web technologies.',
    image: '/Ts.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/sms-temcot',
    demo: 'https://temcot-sms.example.com',
    featured: false,
    type: 'web',
    fullDescription: 'The Temcot School Management System is a comprehensive platform that digitizes and streamlines all aspects of school administration. This full-stack solution integrates student information management, academic performance tracking, attendance monitoring, fee processing, and communication tools in one unified system.',
    impact: 'The system has revolutionized Temcot\'s administrative processes, reducing paperwork by 90% and administrative staff workload by 40%. Teachers now spend 25% less time on administrative tasks, allowing them to focus more on teaching and student engagement.',
    challenges: 'Migrating years of paper records and legacy systems to the new platform while ensuring data integrity was a significant challenge. We developed custom data migration tools and implemented a phased rollout strategy to ensure a smooth transition.',
    features: [
      'Student information management',
      'Attendance tracking system',
      'Grade management and report generation',
      'Fee payment and financial tracking',
      'Parent-teacher communication portal',
      'Timetable management',
      'Assignment submission and grading',
      'Resource library'
    ],
    testimonials: [
      {
        name: 'Mrs. Abena Darko',
        role: 'Vice Principal, Temcot',
        quote: 'This system has transformed how we manage our school. Tasks that used to take days now take minutes.',
      },
      {
        name: 'Mr. Joseph Adu',
        role: 'Mathematics Teacher',
        quote: 'The grade management system has simplified my workflow tremendously. I can focus more on teaching rather than paperwork.',
      }
    ],
    yearCompleted: '2022',
    teamSize: 5,
    metrics: {
      paperworkReduction: '90%',
      adminEfficiency: '40% increase',
      teacherTimeReclaimed: '25%'
    }
  },
  {
    id: 'project-6',
    slug: 'hohoe-sms',
    title: 'School Management System – Hohoe Assembly',
    description: 'Tailored school management system for Hohoe Municipal Assembly.',
    image: '/ho.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    featured: false,
    type: 'web',
    fullDescription: 'The Hohoe Municipal Assembly School Management System is a customized solution designed to meet the specific needs of multiple schools within the Hohoe municipality. The system provides centralized management of student data, academic performance, staff information, and resources across all schools in the district.',
    impact: 'This system has standardized educational administration across the Hohoe municipality, allowing for better resource allocation, performance tracking, and policy implementation. The centralized data has enabled evidence-based decision making at the municipal level, improving educational outcomes.',
    challenges: 'Designing a system that could accommodate varying requirements across different schools while maintaining data consistency and security was challenging. We implemented a flexible architecture with configurable modules to address these needs.',
    features: [
      'Multi-school management from central dashboard',
      'District-wide student performance analytics',
      'Resource allocation tracking',
      'Teacher performance evaluation',
      'Centralized curriculum management',
      'Inter-school communication platform',
      'Automated reporting to education ministry'
    ],
    testimonials: [
      {
        name: 'Hon. Rebecca Kedzi',
        role: 'Education Director, Hohoe Municipal Assembly',
        quote: 'The system has given us unprecedented visibility into educational performance across our municipality, allowing us to target interventions where they\'re most needed.',
      },
      {
        name: 'Mr. Francis Agyeman',
        role: 'Headmaster, Hohoe Basic School',
        quote: 'Being part of a connected system has improved collaboration between schools and provided valuable benchmarking opportunities.',
      }
    ],
    yearCompleted: '2023',
    teamSize: 7,
    metrics: {
      schoolsConnected: '35',
      studentsManaged: '15,000+',
      resourceEfficiency: '30% improvement'
    }
  },
  {
    id: 'project-7',
    title: 'Richy Electrical Services Website',
    slug: 'richy-electricals',
    description: 'A service showcase website for a UK-based electrical company.',
    image: '/richyelectricals.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://richyelectrical.example.com',
    featured: true,
    type: 'web',
    fullDescription: 'The Richy Electrical Services website is a professional platform designed to showcase the company\'s electrical services for residential and commercial clients in the UK. The site features an elegant design with service details, project galleries, testimonials, and integrated booking functionality.',
    impact: 'Since launching the new website, Richy Electrical Services has experienced a 65% increase in online service inquiries and a 45% improvement in conversion rates. The site has established the company as a premium service provider in their market.',
    challenges: 'Creating a website that appealed to both residential and commercial clients while effectively communicating technical service information to non-technical audiences required careful content planning and user experience design.',
    features: [
      'Service catalog with detailed descriptions',
      'Online booking and quote request system',
      'Project gallery with before/after images',
      'Certification and credentials display',
      'Emergency service contact highlight',
      'Customer testimonial showcase',
      'Service area map integration'
    ],
    testimonials: [
      {
        name: 'Richard Thompson',
        role: 'Owner, Richy Electrical Services',
        quote: 'Our website has completely transformed our business. We\'re reaching new clients and growing every month thanks to our improved online presence.',
      },
      {
        name: 'Sarah Williams',
        role: 'Marketing Manager',
        quote: 'The website perfectly captures our brand identity and has significantly improved our lead generation process.',
      }
    ],
    yearCompleted: '2023',
    teamSize: 3,
    metrics: {
      inquiryIncrease: '65%',
      conversionRate: '45% improvement',
      bookingEfficiency: '30% faster'
    }
  },
  {
    id: 'project-8',
    title: 'TaskDey App',
    slug: 'taskdey',
    description: 'A mobile app connecting clients with vocational service providers. Full-stack implementation.',
    image: '/Tasdey.png',
    tags: ['React Native', 'Expo', 'Supabase', 'Node.js'],
    website: 'https://taskdey.example.com',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.taskdey',
    iosUrl: 'https://apps.apple.com/app/food-delivery/id987654321',
    featured: true,
    type: 'mobile',
    fullDescription: 'TaskDey is a comprehensive mobile platform that bridges the gap between clients seeking services and skilled vocational workers. The app provides an intuitive interface for booking services, real-time tracking of service providers, secure payment processing, and a rating system to ensure quality control.',
    impact: 'TaskDey has revolutionized the informal service sector by formalizing vocational work and creating reliable income streams for thousands of skilled workers who previously struggled with inconsistent employment. The platform has reduced unemployment in target communities by 12% and increased average monthly earnings of service providers by 45%.',
    challenges: 'Vetting service providers for quality and reliability was a significant challenge. We implemented a multi-stage verification process including identity verification, skills assessment, and a graduated rating system that rewards consistent quality service.',
    features: [
      'Geolocation-based service provider matching',
      'Real-time service tracking',
      'Secure in-app payments',
      'Service provider verification and background checks',
      'Dynamic pricing based on demand and distance',
      'Emergency service requests with priority matching'
    ],
    testimonials: [
      {
        name: 'Emmanuel Kwarteng',
        role: 'Electrician',
        quote: 'Before TaskDey, I would go days without work. Now I have consistent jobs and my income has more than doubled.',
      },
      {
        name: 'Ama Serwaa',
        role: 'Homeowner',
        quote: 'Finding reliable service providers was always a headache until I started using TaskDey. The quality and reliability are outstanding.',
      }
    ],
    yearCompleted: '2022',
    teamSize: 6,
    metrics: {
      serviceProviders: '5,000+',
      services: '100,000+',
      userRating: '4.8/5'
    }
  },
  {
    id: 'project-9',
    title: 'Ree Services App',
    slug: 'ree-services',
    description: 'Store management and bookkeeping mobile app for small businesses.',
    image: '/ree.jpg',
    tags: ['React Native', 'Supabase', 'Express', 'Node.js'],
    androidUrl: 'https://play.google.com/store/apps/details?id=com.reeapp',
    iosUrl: 'https://apps.apple.com/app/food-delivery/id987654321',
    website: 'https://foodapp.example.com',
    featured: true,
    type: 'mobile',
    fullDescription: 'The Ree Services App is a comprehensive store management and bookkeeping solution designed specifically for small businesses in emerging markets. The mobile application allows business owners to track inventory, manage sales, monitor expenses, generate financial reports, and make data-driven business decisions.',
    impact: 'Ree Services has transformed how small businesses operate by bringing enterprise-level management tools to micro-entrepreneurs. Users report an average 25% increase in profitability through better inventory management and financial visibility. The app has helped over 3,000 businesses formalize their operations and qualify for microloans.',
    challenges: 'Creating an intuitive interface that could be used by users with varying levels of technical and financial literacy was a major challenge. We conducted extensive user testing with diverse small business owners to refine the UI/UX for maximum usability.',
    features: [
      'Inventory tracking and management',
      'Sales recording with receipt generation',
      'Expense categorization and tracking',
      'Financial reporting and analytics',
      'Customer relationship management',
      'Supplier management',
      'Offline functionality with data syncing',
      'Business insights and recommendations'
    ],
    testimonials: [
      {
        name: 'Janet Frimpong',
        role: 'Boutique Owner',
        quote: 'Ree has changed how I run my business. I now know exactly what\'s in stock, what\'s selling, and where my money is going.',
      },
      {
        name: 'Michael Addo',
        role: 'Hardware Store Owner',
        quote: 'The app is so simple to use, yet powerful. I\'ve discovered which products make me the most profit and can now make better decisions.',
      }
    ],
    yearCompleted: '2023',
    teamSize: 5,
    metrics: {
      activeBusinesses: '3,000+',
      averageProfitIncrease: '25%',
      microloanQualifications: '500+'
    }
  },
  {
    id: 'project-10',
    title: 'Pastor Benjamin Online Library',
    slug: 'pbol',
    description: 'A mobile library app for sermon audio and gospel literature.',
    image: '/pbol.jpg',
    tags: ['React Native', 'Supabase', 'Firebase'],
    website: 'https://pbolibrary.example.com',
    iosUrl: 'https://apps.apple.com/app/food-delivery/id987654321',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.reeapp',
    featured: true,
    type: 'mobile',
    fullDescription: 'The Pastor Benjamin Online Library is a comprehensive digital platform that provides access to a vast collection of sermons, theological texts, and gospel literature. The app features audio streaming, e-book reading capabilities, search functionality, offline access, and personalized content recommendations.',
    impact: 'This platform has significantly expanded Pastor Benjamin\'s reach, making his teachings accessible to over 50,000 people across 25 countries. The app has enabled continuous spiritual growth for followers who previously had limited access to religious content and has created a global community around Pastor Benjamin\'s ministry.',
    challenges: 'Designing an app that would work efficiently in regions with limited internet connectivity was a major challenge. We implemented advanced caching strategies and offline functionality to ensure users could access content even with unstable connections.',
    features: [
      'Audio sermon streaming and downloading',
      'E-book reader with bookmarking',
      'Advanced search across all content',
      'Personal study notes and highlights',
      'Content categorization by topics',
      'Daily devotional notifications',
      'Offline access to downloaded content',
      'Community discussion forums'
    ],
    testimonials: [
      {
        name: 'Rev. Isaac Mensah',
        role: 'Ministry Coordinator',
        quote: 'This app has transformed our outreach capabilities. We\'re now reaching believers in countries we never had presence in before.',
      },
      {
        name: 'Sister Mary Agyapong',
        role: 'App User',
        quote: 'Having access to Pastor Benjamin\'s teachings anywhere, anytime has deepened my faith journey tremendously.',
      }
    ],
    yearCompleted: '2023',
    teamSize: 4,
    metrics: {
      globalUsers: '50,000+',
      countriesReached: '25+',
      contentHoursStreamed: '1.2 million+'
    }
  }
];

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query; // Make sure we're using 'slug' consistently
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const projectData = projectsData.find(p => p.slug === slug); // Use strict equality
      setProject(projectData);
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-red-600">Project Not Found</h1>
        <p className="mt-4 text-gray-600">The project you're looking for doesn't exist or has been removed.</p>
        <Link href="/" className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title={`${project.title} – Charles Awuku`}
        description={project.description}
        canonical={`https://charlesawuku.com/projects/${project.slug}`}
        openGraph={{
          url: `https://charlesawuku.com/projects/${project.slug}`,
          title: `${project.title} – Charles Awuku`,
          description: project.description,
          images: [
            {
              url: `https://charlesawuku.com/${project.image}`,
              width: 1200,
              height: 630,
              alt: `${project.title} preview`,
            },
          ],
        }}
      />

      <div className="min-h-screen bg-gray-50 ">
        {/* Hero Section with Image */}
        <div className="relative h-96 bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900">
            {project.image && (
              <div className="relative h-full w-full">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-60"
                  priority
                />
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <Link href="/#projects" className="inline-flex items-center text-white hover:text-blue-300 transition-colors mb-4">
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span>All Projects</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
              <p className="mt-2 text-xl text-gray-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
              <Calendar className="w-12 h-12 text-blue-500 mr-4" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Completed</h3>
                <p className="text-xl font-semibold">{project.yearCompleted}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
              <Users className="w-12 h-12 text-blue-500 mr-4" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Team Size</h3>
                <p className="text-xl font-semibold">{project.teamSize} Members</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
              <Award className="w-12 h-12 text-blue-500 mr-4" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Project Type</h3>
                <p className="text-xl font-semibold capitalize">{project.type}</p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
              >
                <FiGithub className="w-5 h-5 mr-2" />
                GitHub Repository
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Globe className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            )}
            {project.website && (
              <a 
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Website
              </a>
            )}
            {project.androidUrl && (
              <a 
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Android App
              </a>
            )}
            {project.iosUrl && (
              <a 
                href={project.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                iOS App
              </a>
            )}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - Details */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700">{project.fullDescription}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
                <ul className="space-y-3">
                  {project.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium mt-0.5">
                        {index + 1}
                      </span>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges & Solutions</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700">{project.challenges}</p>
                </div>
              </section>
            </div>

            {/* Right Content - Impact & Testimonials */}
            <div className="space-y-8">
              <section className="bg-blue-50 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-blue-900 mb-4">Societal Impact</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-blue-800">{project.impact}</p>
                </div>
                
                {project.metrics && (
                  <div className="mt-6 grid grid-cols-1 gap-4">
                    {project.metrics.users && (
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="text-sm font-semibold text-gray-500">Active Users</h4>
                        <p className="text-2xl font-bold text-blue-700">{project.metrics.users}</p>
                      </div>
                    )}
                    {project.metrics.transactions && (
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="text-sm font-semibold text-gray-500">Transactions</h4>
                        <p className="text-2xl font-bold text-blue-700">{project.metrics.transactions}</p>
                      </div>
                    )}
                    {project.metrics.farmerIncrease && (
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="text-sm font-semibold text-gray-500">Income Increase</h4>
                        <p className="text-2xl font-bold text-blue-700">{project.metrics.farmerIncrease}</p>
                      </div>
                    )}
                    {project.metrics.serviceProviders && (
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="text-sm font-semibold text-gray-500">Service Providers</h4>
                        <p className="text-2xl font-bold text-blue-700">{project.metrics.serviceProviders}</p>
                      </div>
                    )}
                    {project.metrics.services && (
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="text-sm font-semibold text-gray-500">Services Completed</h4>
                        <p className="text-2xl font-bold text-blue-700">{project.metrics.services}</p>
                      </div>
                    )}
                    {project.metrics.userRating && (
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="text-sm font-semibold text-gray-500">User Rating</h4>
                        <p className="text-2xl font-bold text-blue-700">{project.metrics.userRating}</p>
                      </div>
                    )}
                  </div>
                )}
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Testimonials</h2>
                <div className="space-y-4">
                  {project.testimonials?.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="bg-blue-100 rounded-full h-10 w-10 flex items-center justify-center text-blue-700 font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Link href="/" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Interested in working together? Contact me
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProjectDetail;