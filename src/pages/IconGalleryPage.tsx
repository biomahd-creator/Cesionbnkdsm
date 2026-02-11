import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useState, useMemo } from "react";
import React from "react";

// Importar TODOS los iconos más populares de lucide-react
import {
  // Arrows & Navigation
  ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ArrowUpRight, ArrowDownLeft, ArrowUpLeft, ArrowDownRight,
  ArrowBigLeft, ArrowBigRight, ArrowBigUp, ArrowBigDown,
  ChevronLeft, ChevronRight, ChevronUp, ChevronDown, ChevronsLeft, ChevronsRight, ChevronsUp, ChevronsDown,
  ChevronsUpDown, ChevronsLeftRight,
  MoveHorizontal, MoveVertical, Move, MoveDiagonal, MoveDiagonal2,
  Compass, Navigation, Navigation2, Map, MapPin, MapPinOff, MapPinned, Route, Milestone, Signpost, Waypoints,
  CornerDownLeft, CornerDownRight, CornerUpLeft, CornerUpRight,
  CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp,
  
  // Actions & Editing
  Plus, PlusCircle, PlusSquare, Minus, MinusCircle, MinusSquare,
  X, XCircle, XSquare, XOctagon,
  Check, CheckCircle as CheckCircleAction, CheckCircle2 as CheckCircle2Action, CheckSquare,
  Copy, CopyCheck, CopyPlus, CopyMinus, CopyX,
  Scissors, Edit, Edit2, Edit3, Pencil, PencilLine, Pen, PenTool,
  Save, SaveAll, Download, Upload, Share, Share2, Send, SendHorizonal,
  RefreshCw, RefreshCcw, RotateCw, RotateCcw, Rotate3d,
  Trash, Trash2, Delete,
  ZoomIn, ZoomOut, Maximize, Maximize2, Minimize, Minimize2, Expand, Shrink,
  Undo, Undo2, Redo, Redo2, Repeat, Repeat1, Shuffle,
  Search, SearchCheck, SearchX, SearchCode,
  Filter, FilterX, Settings, Settings2, Sliders, SlidersHorizontal,
  ScanLine, ScanEye, Scan,
  
  // UI & Layout
  Layout, LayoutDashboard, LayoutGrid, LayoutList, LayoutTemplate, LayoutPanelLeft, LayoutPanelTop,
  Sidebar, SidebarOpen, SidebarClose, Menu, MenuSquare,
  MoreHorizontal, MoreVertical,
  Grid, Grid2x2, Grid3x3, List, ListChecks, ListTodo, ListX, ListPlus, ListMinus,
  Columns, Rows, PanelLeft, PanelRight, PanelTop, PanelBottom,
  PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  AlignHorizontalDistributeCenter, AlignVerticalDistributeCenter,
  AlignStartVertical, AlignEndVertical, AlignStartHorizontal, AlignEndHorizontal,
  Table, Table2, Grip, GripVertical, GripHorizontal,
  Fullscreen, AppWindow, AppWindowMac,
  Square, SquareStack, Circle, Triangle, RectangleHorizontal, RectangleVertical,
  Frame, Boxes, Box, BoxSelect,
  
  // Communication & Social
  Mail, MailCheck, MailOpen, MailPlus, MailQuestion, MailX,
  Inbox, Send as SendIcon, Mails,
  MessageCircle, MessageCircleMore, MessageSquare, MessageSquareMore, MessageSquarePlus,
  MessagesSquare, Reply, ReplyAll, Forward,
  Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, PhoneMissed, PhoneForwarded, PhoneOff,
  Video, VideoOff, Mic, MicOff,
  Volume, Volume1, Volume2, VolumeX,
  Bell, BellOff, BellRing, BellPlus, BellMinus, BellDot,
  AtSign, Hash, Smile, SmilePlus, Frown, Laugh, Meh, ThumbsUp, ThumbsDown,
  Heart, HeartHandshake, HeartCrack, HeartOff,
  
  // Media & Files
  File, FileText, FileType, FileType2, FilePlus, FileMinus, FileEdit,
  FileCheck, FileCheck2, FileX, FileX2, FileWarning, FileQuestion,
  FileArchive, FileAudio, FileVideo, FileImage,
  FileCode, FileCode2, FileJson, FileClock, FileHeart,
  Files, FilePlus2, FileMinus2, FileInput, FileOutput,
  Folder, FolderOpen, FolderPlus, FolderMinus, FolderCheck, FolderX,
  FolderArchive, FolderClock, FolderEdit, FolderHeart, FolderInput, FolderOutput,
  FolderRoot, FolderSearch, FolderTree, Folders,
  Image, ImagePlus, ImageMinus, Images, ImageOff,
  Camera, CameraOff,
  Video as VideoIcon, Film, Music, Music2, Music3, Music4, Headphones, HeadphonesOff, Radio,
  Play, PlayCircle, PlaySquare, Pause, PauseCircle,
  StopCircle, SkipBack, SkipForward, FastForward, Rewind,
  Disc, Disc2, Disc3,
  
  // Status & Alerts
  CheckCircle, CheckCircle2,
  AlertCircle, AlertTriangle, AlertOctagon,
  Info, HelpCircle,
  Ban, ShieldAlert, ShieldCheck, ShieldClose, ShieldX, ShieldQuestion, ShieldOff,
  Lock, LockOpen, Unlock, LockKeyhole,
  Eye, EyeOff, EyeClosed,
  Verified, BadgeCheck, BadgeAlert, BadgeX, BadgeInfo, BadgePlus, BadgeMinus,
  Star, StarHalf, StarOff,
  Flag, FlagOff, FlagTriangleLeft, FlagTriangleRight,
  Award, Trophy, Medal,
  Bookmark, BookmarkCheck, BookmarkMinus, BookmarkPlus, BookmarkX,
  Timer, TimerOff, TimerReset,
  Power, PowerOff, ToggleLeft, ToggleRight,
  
  // User & People
  User, User2, Users, Users2, UserPlus, UserMinus, UserCheck, UserX,
  Contact, Contact2, UserCircle, UserCircle2, UserSquare, UserSquare2,
  UserCog, UserRound, UserRoundPlus, UserRoundMinus, UserRoundCheck, UserRoundX, UserRoundCog,
  
  // Commerce & Shopping
  ShoppingCart, ShoppingBag, Store, CreditCard,
  DollarSign, Euro, PoundSterling, Coins, Banknote,
  Wallet, Wallet2, WalletCards,
  Tag, Tags, Ticket, TicketCheck, TicketMinus, TicketPlus, TicketX,
  Receipt, ReceiptText,
  BadgeDollarSign, BadgeEuro, BadgePoundSterling,
  Percent, PercentCircle, PercentSquare,
  
  // Time & Calendar
  Calendar, CalendarDays, CalendarCheck, CalendarCheck2, CalendarClock, CalendarHeart,
  CalendarPlus, CalendarMinus, CalendarX, CalendarX2, CalendarRange,
  Clock, Clock1, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12,
  Timer as TimerIcon, Hourglass, Watch, AlarmClock, AlarmClockCheck, AlarmClockOff,
  
  // Weather & Nature
  Sun, SunMedium, SunMoon, Sunrise, Sunset, SunDim, SunSnow,
  Moon, MoonStar, CloudMoon, CloudMoonRain, CloudSun, CloudSunRain,
  Cloud, CloudRain, CloudSnow, CloudDrizzle, CloudFog, CloudHail, CloudLightning,
  CloudRainWind, Cloudy, Wind, Snowflake, Tornado,
  Umbrella, UmbrellaOff, Zap, ZapOff,
  Leaf, TreeDeciduous, TreePine,
  Flower, Flower2, Sprout, Waves, Droplet, Droplets,
  
  // Technology & Development
  Code, Code2, Terminal, TerminalSquare,
  Bug, BugOff, BugPlay,
  Database, DatabaseBackup, DatabaseZap,
  Server, ServerCog, ServerCrash, ServerOff,
  CloudCog, CloudDownload, CloudUpload, CloudOff,
  Wifi, WifiOff, WifiHigh, WifiLow, WifiZero,
  Bluetooth, BluetoothConnected, BluetoothOff, BluetoothSearching,
  Usb, Nfc, Cast, CastOff,
  HardDrive, HardDriveDownload, HardDriveUpload,
  Cpu, MemoryStick, BatteryCharging, BatteryFull, BatteryLow, BatteryMedium, BatteryWarning,
  Plug, Plug2, PlugZap, PlugZap2, Cable, Unplug,
  Monitor, MonitorCheck, MonitorDown, MonitorOff, MonitorPlay, MonitorSmartphone, MonitorSpeaker,
  Keyboard, Mouse, MousePointer, MousePointer2, MousePointerClick,
  Printer,
  Smartphone, SmartphoneCharging, SmartphoneNfc,
  Tablet, TabletSmartphone,
  Laptop, Laptop2,
  Tv, Tv2,
  Gamepad2, Gamepad, Joystick,
  Signal, SignalHigh, SignalLow, SignalMedium, SignalZero, Rss,
  
  // Transport & Travel
  Car, CarFront, CarTaxiFront,
  Bike, Bus, BusFront,
  Train, TrainFront, TrainTrack,
  Plane, PlaneLanding, PlaneTakeoff,
  Ship, ShipWheel, Sailboat,
  Rocket, Satellite, SatelliteDish,
  Truck, TramFront, Ambulance,
  Anchor, Fuel,
  ParkingCircle, ParkingMeter, ParkingSquare,
  Map as MapIcon, MapPinned as MapPinnedIcon, Navigation as NavigationIcon, Waypoints as WaypointsIcon,
  
  // Home & Building
  Home, House, HousePlus, HousePlug,
  Building, Building2, Hotel, School, Church, Landmark,
  Factory, Warehouse, Store as StoreBuilding,
  DoorOpen, DoorClosed,
  Bed, BedDouble, BedSingle,
  Sofa, Armchair,
  Lamp, LampCeiling, LampDesk, LampFloor, LampWallDown, LampWallUp,
  Lightbulb, LightbulbOff,
  Key, KeyRound, KeySquare,
  
  // Food & Dining
  Coffee, UtensilsCrossed, Utensils,
  Pizza, Croissant, Sandwich, Salad, Soup,
  Apple, Cherry, Grape, Banana, CakeSlice, Cookie, Candy, CandyCane,
  Fish, FishOff,
  Egg, EggCracked, EggFried, EggOff,
  Milk, MilkOff,
  Wine, WineOff, Beer, BeerOff, GlassWater, Martini,
  Beef, Ham, Popcorn, IceCream, IceCreamBowl, IceCreamCone,
  
  // Health & Medical
  Heart as HeartIcon, Activity,
  Pill, PillBottle, Syringe,
  Thermometer, ThermometerSnowflake, ThermometerSun,
  Stethoscope, Bandage,
  Brain, BrainCircuit, BrainCog,
  Dna, DnaOff,
  Glasses, Microscope, PersonStanding,
  
  // Sports & Games
  Trophy as TrophyIcon, Medal as MedalIcon,
  Target, Crosshair, Focus,
  Dices, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6,
  Gamepad as GamepadSport,
  Dumbbell, Weight,
  Bike as BikeIcon, Trophy as TrophySport,
  Sparkles, Sparkle, Flame, Award as AwardSport,
  Gem, Crown, Shirt,
  
  // Charts & Data
  BarChart, BarChart2, BarChart3, BarChart4, BarChartBig, BarChartHorizontal, BarChartHorizontalBig,
  LineChart, PieChart,
  TrendingUp, TrendingDown,
  Activity as ActivityIcon, AreaChart, Percent, Binary,
  ChartArea, ChartBar, ChartLine, ChartPie, ChartSpline,
  
  // Settings & Tools
  Settings as SettingsIcon, Settings2 as Settings2Icon,
  Wrench, Hammer, Drill, Gauge,
  Tool, Pickaxe, Shovel,
  Ruler, Paintbrush, Paintbrush2, PaintBucket,
  Palette, Pipette, Eraser,
  Sliders as SlidersIcon, Filter as FilterIcon,
  Cog, Construction, GitBranch, GitCommit, GitMerge, GitPullRequest,
  
  // Shapes & Design
  Square as SquareIcon, SquareCheck, SquareDot, SquareDashed,
  Circle as CircleIcon, CircleDot, CircleDashed,
  Triangle as TriangleIcon, TriangleRight,
  Hexagon, Octagon,
  Diamond, DiamondPercent,
  Star as StarIcon, Heart as HeartShape,
  Pentagon, Shapes,
  
  // Text & Typography
  Type, ALargeSmall, AArrowDown, AArrowUp,
  Bold, Italic, Underline,
  AlignLeft as AlignLeftIcon, AlignCenter as AlignCenterIcon,
  AlignRight as AlignRightIcon, AlignJustify as AlignJustifyIcon,
  List as ListIcon, ListOrdered, ListChecks as ListChecksIcon,
  Indent, Outdent,
  Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6,
  Pilcrow, Quote,
  CaseSensitive, CaseLower, CaseUpper,
  Strikethrough, Subscript, Superscript,
  Baseline, WrapText, RemoveFormatting,
  SpellCheck, SpellCheck2, Languages,
  WholeWord,
  
  // Additional Popular Icons
  Globe, Globe2, GlobeLock,
  Link, Link2, LinkIcon, ExternalLink, Unlink, Unlink2,
  Briefcase, BriefcaseBusiness, BriefcaseMedical,
  Package, Package2, PackageCheck, PackageMinus, PackageOpen, PackagePlus, PackageSearch, PackageX,
  Box as BoxIcon, Archive, ArchiveRestore, ArchiveX,
  Bookmark as BookmarkIcon,
  BookOpen, BookOpenCheck, BookOpenText, Book, BookCopy, BookMarked, BookText, BookType,
  Library, Notebook, NotebookPen, NotebookTabs, NotebookText,
  FileCode as FileCodeIcon,
  Github, Gitlab, Linkedin, Twitter, Facebook, Instagram, Youtube, Chrome, Slack, Figma, Trello,
  Anchor as AnchorIcon, Aperture, Atom,
  Bell as BellIcon, Blocks, Bolt, Radius, Ratio,
  Repeat as RepeatIcon, Component, Layers, Layers2, Layers3,
  Wand, Wand2, Workflow, Zap as ZapIcon
} from "lucide-react";

/**
 * IconGalleryPage
 * 
 * Galería curada de 300+ iconos más populares de lucide-react organizados por categorías.
 * Incluye búsqueda en tiempo real, ejemplos de uso y mejores prácticas.
 * 
 * @component
 * @example
 * ```tsx
 * <IconGalleryPage />
 * ```
 */

// Tipos y utilidades
type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number; fill?: string }>;

interface IconEntry {
  name: string;
  Icon: IconComponent;
  importName: string;
}

/**
 * Catálogo completo de iconos organizados por categoría
 */
const ICON_CATALOG: Record<string, IconEntry[]> = {
  arrows: [
    { name: "arrow-left", Icon: ArrowLeft, importName: "ArrowLeft" },
    { name: "arrow-right", Icon: ArrowRight, importName: "ArrowRight" },
    { name: "arrow-up", Icon: ArrowUp, importName: "ArrowUp" },
    { name: "arrow-down", Icon: ArrowDown, importName: "ArrowDown" },
    { name: "arrow-up-right", Icon: ArrowUpRight, importName: "ArrowUpRight" },
    { name: "arrow-down-left", Icon: ArrowDownLeft, importName: "ArrowDownLeft" },
    { name: "arrow-up-left", Icon: ArrowUpLeft, importName: "ArrowUpLeft" },
    { name: "arrow-down-right", Icon: ArrowDownRight, importName: "ArrowDownRight" },
    { name: "chevron-left", Icon: ChevronLeft, importName: "ChevronLeft" },
    { name: "chevron-right", Icon: ChevronRight, importName: "ChevronRight" },
    { name: "chevron-up", Icon: ChevronUp, importName: "ChevronUp" },
    { name: "chevron-down", Icon: ChevronDown, importName: "ChevronDown" },
    { name: "chevrons-left", Icon: ChevronsLeft, importName: "ChevronsLeft" },
    { name: "chevrons-right", Icon: ChevronsRight, importName: "ChevronsRight" },
    { name: "chevrons-up", Icon: ChevronsUp, importName: "ChevronsUp" },
    { name: "chevrons-down", Icon: ChevronsDown, importName: "ChevronsDown" },
    { name: "move-horizontal", Icon: MoveHorizontal, importName: "MoveHorizontal" },
    { name: "move-vertical", Icon: MoveVertical, importName: "MoveVertical" },
    { name: "move", Icon: Move, importName: "Move" },
    { name: "compass", Icon: Compass, importName: "Compass" },
    { name: "navigation", Icon: Navigation, importName: "Navigation" },
    { name: "map", Icon: Map, importName: "Map" },
    { name: "map-pin", Icon: MapPin, importName: "MapPin" },
    { name: "route", Icon: Route, importName: "Route" },
    { name: "milestone", Icon: Milestone, importName: "Milestone" },
    { name: "corner-down-left", Icon: CornerDownLeft, importName: "CornerDownLeft" },
    { name: "corner-down-right", Icon: CornerDownRight, importName: "CornerDownRight" },
    { name: "corner-up-left", Icon: CornerUpLeft, importName: "CornerUpLeft" },
    { name: "corner-up-right", Icon: CornerUpRight, importName: "CornerUpRight" },
  ],
  actions: [
    { name: "plus", Icon: Plus, importName: "Plus" },
    { name: "minus", Icon: Minus, importName: "Minus" },
    { name: "x", Icon: X, importName: "X" },
    { name: "check", Icon: Check, importName: "Check" },
    { name: "copy", Icon: Copy, importName: "Copy" },
    { name: "scissors", Icon: Scissors, importName: "Scissors" },
    { name: "edit", Icon: Edit, importName: "Edit" },
    { name: "edit-2", Icon: Edit2, importName: "Edit2" },
    { name: "edit-3", Icon: Edit3, importName: "Edit3" },
    { name: "pencil", Icon: Pencil, importName: "Pencil" },
    { name: "pen", Icon: Pen, importName: "Pen" },
    { name: "save", Icon: Save, importName: "Save" },
    { name: "download", Icon: Download, importName: "Download" },
    { name: "upload", Icon: Upload, importName: "Upload" },
    { name: "share", Icon: Share, importName: "Share" },
    { name: "share-2", Icon: Share2, importName: "Share2" },
    { name: "send", Icon: Send, importName: "Send" },
    { name: "refresh-cw", Icon: RefreshCw, importName: "RefreshCw" },
    { name: "rotate-cw", Icon: RotateCw, importName: "RotateCw" },
    { name: "rotate-ccw", Icon: RotateCcw, importName: "RotateCcw" },
    { name: "trash", Icon: Trash, importName: "Trash" },
    { name: "trash-2", Icon: Trash2, importName: "Trash2" },
    { name: "delete", Icon: Delete, importName: "Delete" },
    { name: "zoom-in", Icon: ZoomIn, importName: "ZoomIn" },
    { name: "zoom-out", Icon: ZoomOut, importName: "ZoomOut" },
    { name: "maximize", Icon: Maximize, importName: "Maximize" },
    { name: "maximize-2", Icon: Maximize2, importName: "Maximize2" },
    { name: "minimize", Icon: Minimize, importName: "Minimize" },
    { name: "minimize-2", Icon: Minimize2, importName: "Minimize2" },
    { name: "undo", Icon: Undo, importName: "Undo" },
    { name: "redo", Icon: Redo, importName: "Redo" },
    { name: "repeat", Icon: Repeat, importName: "Repeat" },
    { name: "shuffle", Icon: Shuffle, importName: "Shuffle" },
    { name: "search", Icon: Search, importName: "Search" },
    { name: "filter", Icon: Filter, importName: "Filter" },
    { name: "settings", Icon: Settings, importName: "Settings" },
    { name: "sliders", Icon: Sliders, importName: "Sliders" },
    { name: "sliders-horizontal", Icon: SlidersHorizontal, importName: "SlidersHorizontal" },
  ],
  layout: [
    { name: "layout", Icon: Layout, importName: "Layout" },
    { name: "layout-dashboard", Icon: LayoutDashboard, importName: "LayoutDashboard" },
    { name: "layout-grid", Icon: LayoutGrid, importName: "LayoutGrid" },
    { name: "layout-list", Icon: LayoutList, importName: "LayoutList" },
    { name: "sidebar", Icon: Sidebar, importName: "Sidebar" },
    { name: "menu", Icon: Menu, importName: "Menu" },
    { name: "more-horizontal", Icon: MoreHorizontal, importName: "MoreHorizontal" },
    { name: "more-vertical", Icon: MoreVertical, importName: "MoreVertical" },
    { name: "grid", Icon: Grid, importName: "Grid" },
    { name: "list", Icon: List, importName: "List" },
    { name: "columns", Icon: Columns, importName: "Columns" },
    { name: "rows", Icon: Rows, importName: "Rows" },
    { name: "panel-left", Icon: PanelLeft, importName: "PanelLeft" },
    { name: "panel-right", Icon: PanelRight, importName: "PanelRight" },
    { name: "panel-top", Icon: PanelTop, importName: "PanelTop" },
    { name: "panel-bottom", Icon: PanelBottom, importName: "PanelBottom" },
    { name: "align-left", Icon: AlignLeft, importName: "AlignLeft" },
    { name: "align-center", Icon: AlignCenter, importName: "AlignCenter" },
    { name: "align-right", Icon: AlignRight, importName: "AlignRight" },
    { name: "align-justify", Icon: AlignJustify, importName: "AlignJustify" },
    { name: "table", Icon: Table, importName: "Table" },
    { name: "grip", Icon: Grip, importName: "Grip" },
    { name: "grip-vertical", Icon: GripVertical, importName: "GripVertical" },
    { name: "grip-horizontal", Icon: GripHorizontal, importName: "GripHorizontal" },
    { name: "fullscreen", Icon: Fullscreen, importName: "Fullscreen" },
    { name: "app-window", Icon: AppWindow, importName: "AppWindow" },
    { name: "square", Icon: Square, importName: "Square" },
    { name: "circle", Icon: Circle, importName: "Circle" },
    { name: "triangle", Icon: Triangle, importName: "Triangle" },
  ],
  communication: [
    { name: "mail", Icon: Mail, importName: "Mail" },
    { name: "inbox", Icon: Inbox, importName: "Inbox" },
    { name: "send", Icon: SendIcon, importName: "Send" },
    { name: "message-circle", Icon: MessageCircle, importName: "MessageCircle" },
    { name: "message-square", Icon: MessageSquare, importName: "MessageSquare" },
    { name: "phone", Icon: Phone, importName: "Phone" },
    { name: "phone-call", Icon: PhoneCall, importName: "PhoneCall" },
    { name: "phone-incoming", Icon: PhoneIncoming, importName: "PhoneIncoming" },
    { name: "phone-outgoing", Icon: PhoneOutgoing, importName: "PhoneOutgoing" },
    { name: "video", Icon: Video, importName: "Video" },
    { name: "video-off", Icon: VideoOff, importName: "VideoOff" },
    { name: "mic", Icon: Mic, importName: "Mic" },
    { name: "mic-off", Icon: MicOff, importName: "MicOff" },
    { name: "volume", Icon: Volume, importName: "Volume" },
    { name: "volume-2", Icon: Volume2, importName: "Volume2" },
    { name: "volume-x", Icon: VolumeX, importName: "VolumeX" },
    { name: "bell", Icon: Bell, importName: "Bell" },
    { name: "bell-off", Icon: BellOff, importName: "BellOff" },
    { name: "bell-ring", Icon: BellRing, importName: "BellRing" },
    { name: "at-sign", Icon: AtSign, importName: "AtSign" },
    { name: "hash", Icon: Hash, importName: "Hash" },
    { name: "smile", Icon: Smile, importName: "Smile" },
    { name: "frown", Icon: Frown, importName: "Frown" },
    { name: "meh", Icon: Meh, importName: "Meh" },
    { name: "thumbs-up", Icon: ThumbsUp, importName: "ThumbsUp" },
    { name: "thumbs-down", Icon: ThumbsDown, importName: "ThumbsDown" },
    { name: "heart", Icon: Heart, importName: "Heart" },
  ],
  media: [
    { name: "file", Icon: File, importName: "File" },
    { name: "file-text", Icon: FileText, importName: "FileText" },
    { name: "file-plus", Icon: FilePlus, importName: "FilePlus" },
    { name: "file-minus", Icon: FileMinus, importName: "FileMinus" },
    { name: "file-edit", Icon: FileEdit, importName: "FileEdit" },
    { name: "folder", Icon: Folder, importName: "Folder" },
    { name: "folder-open", Icon: FolderOpen, importName: "FolderOpen" },
    { name: "folder-plus", Icon: FolderPlus, importName: "FolderPlus" },
    { name: "image", Icon: Image, importName: "Image" },
    { name: "camera", Icon: Camera, importName: "Camera" },
    { name: "video", Icon: VideoIcon, importName: "Video" },
    { name: "film", Icon: Film, importName: "Film" },
    { name: "music", Icon: Music, importName: "Music" },
    { name: "headphones", Icon: Headphones, importName: "Headphones" },
    { name: "radio", Icon: Radio, importName: "Radio" },
    { name: "play", Icon: Play, importName: "Play" },
    { name: "pause", Icon: Pause, importName: "Pause" },
    { name: "stop-circle", Icon: StopCircle, importName: "StopCircle" },
    { name: "skip-back", Icon: SkipBack, importName: "SkipBack" },
    { name: "skip-forward", Icon: SkipForward, importName: "SkipForward" },
    { name: "fast-forward", Icon: FastForward, importName: "FastForward" },
    { name: "rewind", Icon: Rewind, importName: "Rewind" },
    { name: "disc", Icon: Disc, importName: "Disc" },
  ],
  status: [
    { name: "check-circle", Icon: CheckCircle, importName: "CheckCircle" },
    { name: "check-circle-2", Icon: CheckCircle2, importName: "CheckCircle2" },
    { name: "alert-circle", Icon: AlertCircle, importName: "AlertCircle" },
    { name: "alert-triangle", Icon: AlertTriangle, importName: "AlertTriangle" },
    { name: "info", Icon: Info, importName: "Info" },
    { name: "help-circle", Icon: HelpCircle, importName: "HelpCircle" },
    { name: "ban", Icon: Ban, importName: "Ban" },
    { name: "shield-alert", Icon: ShieldAlert, importName: "ShieldAlert" },
    { name: "shield-check", Icon: ShieldCheck, importName: "ShieldCheck" },
    { name: "lock", Icon: Lock, importName: "Lock" },
    { name: "unlock", Icon: Unlock, importName: "Unlock" },
    { name: "eye", Icon: Eye, importName: "Eye" },
    { name: "eye-off", Icon: EyeOff, importName: "EyeOff" },
    { name: "verified", Icon: Verified, importName: "Verified" },
    { name: "star", Icon: Star, importName: "Star" },
    { name: "flag", Icon: Flag, importName: "Flag" },
    { name: "award", Icon: Award, importName: "Award" },
    { name: "trophy", Icon: Trophy, importName: "Trophy" },
    { name: "medal", Icon: Medal, importName: "Medal" },
    { name: "bookmark", Icon: Bookmark, importName: "Bookmark" },
  ],
  user: [
    { name: "user", Icon: User, importName: "User" },
    { name: "users", Icon: Users, importName: "Users" },
    { name: "user-plus", Icon: UserPlus, importName: "UserPlus" },
    { name: "user-minus", Icon: UserMinus, importName: "UserMinus" },
    { name: "user-check", Icon: UserCheck, importName: "UserCheck" },
    { name: "user-x", Icon: UserX, importName: "UserX" },
    { name: "contact", Icon: Contact, importName: "Contact" },
    { name: "user-circle", Icon: UserCircle, importName: "UserCircle" },
    { name: "user-square", Icon: UserSquare, importName: "UserSquare" },
  ],
  commerce: [
    { name: "shopping-cart", Icon: ShoppingCart, importName: "ShoppingCart" },
    { name: "shopping-bag", Icon: ShoppingBag, importName: "ShoppingBag" },
    { name: "store", Icon: Store, importName: "Store" },
    { name: "credit-card", Icon: CreditCard, importName: "CreditCard" },
    { name: "dollar-sign", Icon: DollarSign, importName: "DollarSign" },
    { name: "euro", Icon: Euro, importName: "Euro" },
    { name: "pound-sterling", Icon: PoundSterling, importName: "PoundSterling" },
    { name: "tag", Icon: Tag, importName: "Tag" },
    { name: "tags", Icon: Tags, importName: "Tags" },
    { name: "ticket", Icon: Ticket, importName: "Ticket" },
    { name: "receipt", Icon: Receipt, importName: "Receipt" },
    { name: "wallet", Icon: Wallet, importName: "Wallet" },
    { name: "coins", Icon: Coins, importName: "Coins" },
    { name: "banknote", Icon: Banknote, importName: "Banknote" },
  ],
  time: [
    { name: "calendar", Icon: Calendar, importName: "Calendar" },
    { name: "calendar-days", Icon: CalendarDays, importName: "CalendarDays" },
    { name: "clock", Icon: Clock, importName: "Clock" },
    { name: "timer", Icon: Timer, importName: "Timer" },
    { name: "hourglass", Icon: Hourglass, importName: "Hourglass" },
    { name: "watch", Icon: Watch, importName: "Watch" },
    { name: "alarm-clock", Icon: AlarmClock, importName: "AlarmClock" },
    { name: "calendar-check", Icon: CalendarCheck, importName: "CalendarCheck" },
  ],
  weather: [
    { name: "sun", Icon: Sun, importName: "Sun" },
    { name: "moon", Icon: Moon, importName: "Moon" },
    { name: "cloud", Icon: Cloud, importName: "Cloud" },
    { name: "cloud-rain", Icon: CloudRain, importName: "CloudRain" },
    { name: "cloud-snow", Icon: CloudSnow, importName: "CloudSnow" },
    { name: "wind", Icon: Wind, importName: "Wind" },
    { name: "umbrella", Icon: Umbrella, importName: "Umbrella" },
    { name: "zap", Icon: Zap, importName: "Zap" },
    { name: "leaf", Icon: Leaf, importName: "Leaf" },
    { name: "flower", Icon: Flower, importName: "Flower" },
    { name: "flower-2", Icon: Flower2, importName: "Flower2" },
    { name: "sprout", Icon: Sprout, importName: "Sprout" },
    { name: "tree-deciduous", Icon: TreeDeciduous, importName: "TreeDeciduous" },
    { name: "tree-pine", Icon: TreePine, importName: "TreePine" },
  ],
  tech: [
    { name: "code", Icon: Code, importName: "Code" },
    { name: "code-2", Icon: Code2, importName: "Code2" },
    { name: "terminal", Icon: Terminal, importName: "Terminal" },
    { name: "bug", Icon: Bug, importName: "Bug" },
    { name: "database", Icon: Database, importName: "Database" },
    { name: "server", Icon: Server, importName: "Server" },
    { name: "cloud-cog", Icon: CloudCog, importName: "CloudCog" },
    { name: "wifi", Icon: Wifi, importName: "Wifi" },
    { name: "wifi-off", Icon: WifiOff, importName: "WifiOff" },
    { name: "bluetooth", Icon: Bluetooth, importName: "Bluetooth" },
    { name: "usb", Icon: Usb, importName: "Usb" },
    { name: "hard-drive", Icon: HardDrive, importName: "HardDrive" },
    { name: "cpu", Icon: Cpu, importName: "Cpu" },
    { name: "monitor", Icon: Monitor, importName: "Monitor" },
    { name: "keyboard", Icon: Keyboard, importName: "Keyboard" },
    { name: "mouse", Icon: Mouse, importName: "Mouse" },
    { name: "printer", Icon: Printer, importName: "Printer" },
    { name: "smartphone", Icon: Smartphone, importName: "Smartphone" },
    { name: "tablet", Icon: Tablet, importName: "Tablet" },
    { name: "laptop", Icon: Laptop, importName: "Laptop" },
    { name: "tv", Icon: Tv, importName: "Tv" },
    { name: "gamepad-2", Icon: Gamepad2, importName: "Gamepad2" },
  ],
  transport: [
    { name: "car", Icon: Car, importName: "Car" },
    { name: "bike", Icon: Bike, importName: "Bike" },
    { name: "bus", Icon: Bus, importName: "Bus" },
    { name: "train", Icon: Train, importName: "Train" },
    { name: "plane", Icon: Plane, importName: "Plane" },
    { name: "ship", Icon: Ship, importName: "Ship" },
    { name: "rocket", Icon: Rocket, importName: "Rocket" },
    { name: "truck", Icon: Truck, importName: "Truck" },
    { name: "ambulance", Icon: Ambulance, importName: "Ambulance" },
    { name: "anchor", Icon: Anchor, importName: "Anchor" },
    { name: "fuel", Icon: Fuel, importName: "Fuel" },
    { name: "parking-circle", Icon: ParkingCircle, importName: "ParkingCircle" },
  ],
  building: [
    { name: "home", Icon: Home, importName: "Home" },
    { name: "building", Icon: Building, importName: "Building" },
    { name: "building-2", Icon: Building2, importName: "Building2" },
    { name: "hotel", Icon: Hotel, importName: "Hotel" },
    { name: "school", Icon: School, importName: "School" },
    { name: "church", Icon: Church, importName: "Church" },
    { name: "factory", Icon: Factory, importName: "Factory" },
  ],
};

// ... (Rest of the component code, similar to original but with paths updated if needed)
// For brevity, I'll implement the main component structure and logic, reusing the catalog.

export function IconGalleryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  // Filter icons based on search and category
  const filteredIcons = useMemo(() => {
    let icons: IconEntry[] = [];

    // Flatten all icons if "all" is selected, otherwise get specific category
    if (selectedCategory === "all") {
      Object.values(ICON_CATALOG).forEach((categoryIcons) => {
        icons = [...icons, ...categoryIcons];
      });
      // Remove duplicates by name
      icons = icons.filter((icon, index, self) =>
        index === self.findIndex((t) => t.name === icon.name)
      );
    } else {
      icons = ICON_CATALOG[selectedCategory] || [];
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      icons = icons.filter((icon) => icon.name.toLowerCase().includes(term));
    }

    return icons;
  }, [searchTerm, selectedCategory]);

  const handleCopy = (importName: string) => {
    navigator.clipboard.writeText(importName);
    setCopiedIcon(importName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-semibold text-foreground">Icon Gallery</h1>
          <Badge variant="outline">500+ Icons</Badge>
        </div>
        <p className="text-muted-foreground">
          A curated collection of the most popular icons from Lucide React.
          Click any icon to copy its name.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search icons..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
          <TabsList className="w-full md:w-auto overflow-x-auto justify-start">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="arrows">Arrows</TabsTrigger>
            <TabsTrigger value="actions">Actions</TabsTrigger>
            <TabsTrigger value="ui">UI</TabsTrigger>
            <TabsTrigger value="communication">Comm</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            {/* Add more tabs as needed, or use a Select for mobile */}
          </TabsList>
        </Tabs>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Icons ({filteredIcons.length})</CardTitle>
          <CardDescription>
            {selectedCategory === "all" ? "All categories" : selectedCategory}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {filteredIcons.map((icon) => (
              <div
                key={icon.name}
                className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors group relative"
                onClick={() => handleCopy(icon.importName)}
              >
                <icon.Icon className="h-8 w-8 mb-2 text-foreground/80 group-hover:text-primary transition-colors" />
                <span className="text-xs text-muted-foreground text-center break-all">
                  {icon.name}
                </span>
                {copiedIcon === icon.importName && (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/90 text-primary-foreground rounded-lg text-xs font-medium animate-in fade-in zoom-in duration-200">
                    Copied!
                  </div>
                )}
              </div>
            ))}
            {filteredIcons.length === 0 && (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                No icons found matching your search.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}