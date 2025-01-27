CREATE TABLE `notworking_events_event` (
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
CREATE TABLE `notworking_events_post` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `notworking_events_post_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `notworking_events_user` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`email` varchar(256),
	CONSTRAINT `notworking_events_user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `notworking_events_event` (`name`);--> statement-breakpoint
CREATE INDEX `name_idx` ON `notworking_events_post` (`name`);--> statement-breakpoint
CREATE INDEX `name_idx` ON `notworking_events_user` (`name`);