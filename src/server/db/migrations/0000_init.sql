CREATE TABLE IF NOT EXISTS `notworking_events_event` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`country` varchar(256),
	`province` varchar(256),
	`district` varchar(256),
	CONSTRAINT `notworking_events_event_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `notworking_events_images` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`url` varchar(256),
	`title` varchar(256),
	`user_id` varchar(256) NOT NULL,
	CONSTRAINT `notworking_events_images_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `notworking_events_user` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`clerk_id` varchar(256),
	`name` varchar(256),
	`username` varchar(256),
	`first_name` varchar(256),
	`last_name` varchar(256),
	`birthdate` timestamp,
	`avatar` varchar(256),
	`description` varchar(256),
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`email` varchar(256),
	`password` varchar(256),
	`status` boolean DEFAULT false,
	`document_type_id` bigint,
	`document_number` varchar(256),
	`phone_number` varchar(256),
	CONSTRAINT `notworking_events_user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `notworking_events_user_event` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`user_id` bigint NOT NULL,
	`event_id` bigint NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `notworking_events_user_event_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `name_event_idx` ON `notworking_events_event` (`name`);--> statement-breakpoint
CREATE INDEX `url_images_idx` ON `notworking_events_images` (`url`);--> statement-breakpoint
CREATE INDEX `name_events_user_idx` ON `notworking_events_user` (`name`);--> statement-breakpoint
CREATE INDEX `user_id_user_event_idx` ON `notworking_events_user_event` (`user_id`);--> statement-breakpoint
CREATE INDEX `event_id_idx` ON `notworking_events_user_event` (`event_id`);